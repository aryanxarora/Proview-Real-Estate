import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isDisabled, setIsDisabled] = useState(false);
  const [submitClasses] = useState(
    "disabled:bg-green-500 disabled:ring-0 disabled:font-medium disabled:text-white"
  );
  const [buttonText, setButtonText] = useState("SEND MESSAGE");

  const toggleDisable = () => {
    setIsDisabled(!isDisabled);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c1vsxth",
        "template_s81tzq5",
        form.current,
        "2erWYjaPkO4fwDjVD"
      )
      .then(
        (result) => {
          toggleDisable();
          setButtonText("MESSAGE SENT");
        },
        (error) => {
          window.alert("Error, try again later!");
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center mx-5 my-5">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-4 w-full lg:w-1/2 xl:w-1/3"
      >
        <div>
          <label className="text-sm">Full Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="John Doe"
            className="text-sm border border-solid border-black rounded-none w-full px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-gray-900"
            required
          />
        </div>
        <div>
          <label className="text-sm">Email Address</label>
          <input
            type="email"
            name="user_email"
            placeholder="johndoe@acme.corp"
            className="text-sm border border-solid border-black rounded-none w-full px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-gray-900"
            required
          />
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea
            name="message"
            placeholder="Lorem ipsum set amet dolor."
            rows="10"
            className="text-sm border border-solid border-black rounded-none w-full px-4 py-2 mt-2 outline-none focus:ring-1 focus:ring-gray-900"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          value="send"
          className={`inline-block ring-1 ring-black font-sans text-sm px-6 py-2 uppercase hover:bg-black hover:text-white ${submitClasses}`}
          disabled={isDisabled}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default Contact;
