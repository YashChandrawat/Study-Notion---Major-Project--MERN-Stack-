const { default: mongoose } = require("mongoose");
const Course = require("../models/Course");
const RatingAndReview = require("../models/RatingAndReview");

// create rating
exports.createRating = async (req, res) => {
  try {
    // get user id
    const userId = req.user.id;

    // fetch data from req.body
    const { rating, review, courseId } = req.body;

    // Verify the user is present in the Course or not
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });
    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Student is not enrolled in the course",
      });
    }

    // Check if the user already reviewed on that course or not
    const alreadyReviewed = await RatingAndReview.findOne({
      user: userId,
      course: courseId,
    });

    if (alreadyReviewed) {
      return res.status(403).json({
        success: false,
        message: "User already reviewed on this course",
      });
    }
    // create rating and review
    const ratingReview = await RatingAndReview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });

    // update course with the rating/review
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: { ratingAndReviews: ratingReview._id },
      },
      { new: true }
    );
    console.log(updatedCourseDetails);
    // return response
    return res.status(200).json({
      success: true,
      message: "Rating and Review submitted successfully",
      ratingReview,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot able to create RATING",
      error: error.message,
    });
  }
};

// get average rating
exports.getAverageRating = async (req, res) => {
  try {
    // get course id
    const courseId = req.body.courseId;

    // Calculate average rating
    const result = await RatingAndReview.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: { _id: null, averageRating: { $avg: "$rating" } },
      },
    ]);

    if (result.length > 0) {
      // Rating mil gai apko
      return res
        .status(200)
        .json({ success: true, averageRating: result[0].averageRating });
    }

    // return response
    return res.status(200).json({
      success: true,
      message: "Average rating is 0, no ratings given till now",
      averageRating: 0,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot able to fetch te average rating",
    });
  }
};

// get all rating
exports.getAllRating = async (req, res) => {
  try {
    const allReviews = await RatingAndReview.find({})
      .sort({ rating: "desc" })
      .populate({ path: "user", select: "firstname lastName email image" })
      .populate({ path: "course", select: "courseName" })
      .exec();

    return res.status(200).json({
      success: true,
      message: "All the rating has been fetched successfully",
      data: allReviews,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Cannot able to fetch all the present rating",
    });
  }
};
