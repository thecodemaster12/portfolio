import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import ContactBanner from "../assets/images/contact-banner.svg";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_h52bmf7", "template_g9u5w0k", form.current, {
        publicKey: "IQ4yK21GM8DXJC3NZ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          toast.success(<FaTelegramPlane color="bg-primary" /> , 'Email sent successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    toast.error("Something went wrong", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen border flex justify-center items-center p-10 gap-8 relative"
    >
      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form> */}

      {/* Form */}
      <div className="border flex-1">
        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="user_name"
              className="block text-lg font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="user_email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your Email"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label
              htmlFor="subject"
              className="block text-lg font-medium text-gray-700"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Subject"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-300"
            >
              <FaTelegramPlane color="" /> Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Image */}
      <div className="hidden md:block border flex-1">
        <img src={ContactBanner} alt="" srcset="" />
      </div>
      <footer className="absolute bottom-0 w-full py-4 bg-primary">
        <h1 className="text-center text-[#fff]">This is footer</h1>
      </footer>
      <ToastContainer />
    </section>
  );
};

export default Contact;
