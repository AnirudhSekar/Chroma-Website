"use client";
import React, { useState } from "react";

import { validationSchema } from "../utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";


import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsloading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);


  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsloading(true);
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      resetForm();

      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Failed to send email:", error);
    } finally {
      setSubmitting(false);
      toast.success("Form submitted successfully!");
      setShowConfetti(true);
      setIsloading(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col gap-4 w-full">
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label htmlFor="name" className="text-xl">
                Name
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full sm:w-73 border-1 border-gray-800 rounded-xs p-3"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label htmlFor="email" className="text-xl">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                className="w-full sm:w-73 border-1 border-gray-800 rounded-xs p-3"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xl">
              Message
            </label>
            <Field
              as="textarea"
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full lg:w-150 border-1 border-gray-800 rounded-xs p-3 resize-none h-32"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#8932ad] to-[#ed4064] text-white font-bold py-2 px-4 rounded-sm hover:bg-gradient-to-l transition duration-300 w-full sm:w-auto disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
        />
      )}
    </div>
  );
};

export default ContactForm;