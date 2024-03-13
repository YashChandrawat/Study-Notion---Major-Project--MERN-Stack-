import Footer from "../Components/Common/Footer";
import ContactDetails from "../Components/Core/ContactPage/ContactDetails";
import ContactForm from "../Components/Core/ContactPage/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mb-16 mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;

// import Footer from "../Components/Common/Footer";
// import ContactDetails from "../Components/Core/ContactPage/ContactDetails";
// import ContactForm from "../Components/Core/ContactPage/ContactForm";

// const Contact = () => {
//   return (
//     <div>
//       <div className="mx-auto mb-16 mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
//         {/* Contact Details */}
//         {/* <div className="lg:w-[40%]">
//           <ContactDetails />
//         </div> */}

//         {/* Contact Form */}
//         <div className="lg:w-full">
//           <ContactForm />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Contact;
