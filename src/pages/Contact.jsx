import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import ContactBanner from "../assets/images/contact-banner.svg";
import { FaTelegramPlane } from "react-icons/fa";
import { sub } from "framer-motion/client";

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    submitBtn.innerText = "Sending...";
    emailjs
      .sendForm("service_h52bmf7", "template_g9u5w0k", form.current, {
        publicKey: "IQ4yK21GM8DXJC3NZ",
      })
      .then(
        () => {
          e.target.reset();
          toast.success(
            <FaTelegramPlane color="bg-primary" />,
            "Email sent successfully",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            }
          );
          submitBtn.disabled = false;
          submitBtn.innerText = "Send Message";

        },
        (error) => {
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
          console.log("FAILED...", error.text);
          submitBtn.disabled = false;
          submitBtn.innerText = "Send again";
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center p-4 gap-2 relative"
    >
      <div className="col-span-2 mb-4 md:mb-8 text-center">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-secondary font-pally">
          Contact Me <span className="inline-block">✉️</span>
        </h2>
      </div>

      {/* Form */}
      <div className="bg-gray-100 shadow-md border border-gray-200 p-6 rounded-lg col-span-2 w-full md:col-span-1">
        <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
          {/* Name Field */}
          <div>
            <label
              htmlFor="user_name"
              className="block text-base md:text-lg font-medium text-gray-700"
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
              className="block text-base md:text-lg font-medium text-gray-700"
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
              className="block text-base md:text-lg font-medium text-gray-700"
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
              className="block text-base md:text-lg font-medium text-gray-700"
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
              id="submitBtn"
                type="submit"
                className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition ease-in-out duration-300"
              >
                Send Message
              </button>
          </div>
        </form>
      </div>

      {/* Image */}
      <div className="hidden md:flex flex-col justify-center items-center col-span-1 w-full">
        <img src={ContactBanner} alt="" />
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-2 bg-secondary">
        <p className="text-center text-sm md:text-base text-white">
          &copy; {new Date().getFullYear()} Saifur Rahman Shihab. All rights reserved.
        </p>
      </footer>
      <ToastContainer />
    </section>
  );
};

export default Contact;
