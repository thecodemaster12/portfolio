import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
          alert("Message Sent Successfully");
          
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items-center bg-dark"
    >
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
