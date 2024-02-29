const { instance } = require("../config/razorpay");
const Course = require("../models/Course");
const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const courseEnrollmentEmail = require("../mail/templates/courseEnrollmentEmail");
const { default: mongoose } = require("mongoose");

// Capture the payment and initiate the razorpay order
exports.capturePayment = async (req, res) => {
  try {
    // get courseId and userId
    const { courseId } = req.body;
    const userId = req.user.id;

    // Validation karo
    // valid courseId
    if (!courseId) {
      return res.status(401).json({
        success: false,
        message: "Please provide the valid course id",
      });
    }

    // valid courseDetail
    let course;
    try {
      course = await Course.findById(courseId);
      if (!course) {
        return res.json({
          success: false,
          message: "Could not find the course",
        });
      }
      // user already pay for the same course
      const uid = new mongoose.Types.ObjectId(userId);
      if (course.studentsEnrolled.includes(uid)) {
        return res.status(401).json({
          success: false,
          message: "Student is already enrolled",
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }

    // order create
    const amount = course.price;
    const currency = "INR";

    const options = {
      amount: amount * 100,
      currency: currency,
      receiptNumber: Math.random(Date.now().toString()),
      notes: {
        courseId: courseId,
        userId,
      },
    };

    try {
      // Initiate the payment using razorpay
      const paymentResponse = await instance.orders.create(options);
      console.log(paymentResponse);
      return res.status(200).json({
        success: true,
        courseName: course.courseName,
        courseDescription: course.courseDescription,
        thumbnail: course.thumbnail,
        orderId: paymentResponse.id,
        currency: paymentResponse.currency,
        amount: paymentResponse.amount,
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Could not initate the order of razorpay",
      });
    }

    // return response
    return res.status(200).json({
      success: true,
      message: "Razorpay order has been initiated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot able to initate the razorpay order",
    });
  }
};

// verify signature of razorpay and server
exports.verifiedSignature = async (req, res) => {
  try {
    // Web hook secret is present at the SEVER and signature is sent by Razorpay through API NOW if they both are verified then we can proceed further otherwise we cannot
    const webHookSecret = "12345678";
    const signature = req.headers["x-razorpay-signature"];

    // we have to pass our webhooksecret into 3 steps such that we can hash our web hook secret and achive our hashing
    const shashum = crypto.createHmac("sha256", webHookSecret);
    shashum.update(JSON.stringify(req.body));
    const digest = shashum.digest("hex");

    if (signature == digest) {
      console.log("Payment is authorised");
      const { courseId, userId } = req.body.payload.payment.entity.notes;
      try {
        // Fulfill the action --
        // find the course and Student ko enroll karo
        const enrolledCourse = await Course.findOneAndUpdate(
          { _id: courseId },
          { $push: { studentsEnrolled: userId } },
          { new: true }
        );
        if (!enrolledCourse) {
          return res.status(500).json({
            success: false,
            message: "Course NOT FOUND",
          });
        }

        console.log(enrolledCourse);

        // Find the student and add the course to their list of enrolled course me
        const enrolledStudent = await User.findOneAndUpdate(
          { _id: userId },
          { $push: { courses: courseId } },
          { new: true }
        );

        console.log(enrolledStudent);

        // Email send kro confirmation ka
        const emailResponse = await mailSender(
          enrolledStudent.email,
          "Congratulations from StudyNotion",
          "Congratulations, you are onboarded into new StudyNotion Course"
        );

        console.log(emailResponse);
        return res.status(200).json({
          success: true,
          message: "Signature Verified and Course Added",
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid Request",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Verification of Razorpay and Sever FAILED",
    });
  }
};
