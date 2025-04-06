"use client";
import React, { useState } from "react";
import { validationSchema } from "../../utils/validations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";
import { motion } from "framer-motion";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
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
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setSubmitting(false);
      toast.success("Message sent successfully!");
      setShowConfetti(true);
      setIsLoading(false);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  };

  return (
    <div className="w-full">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-700 font-medium">
                  Name
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#8932ad] focus:border-transparent"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-700 font-medium">
                  Email
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#8932ad] focus:border-transparent"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                id="message"
                placeholder="Your message here..."
                className="w-full border border-gray-300 rounded-lg p-3 h-40 focus:ring-2 focus:ring-[#8932ad] focus:border-transparent"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting || isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-[#8932ad] to-[#ed4064] text-white font-semibold py-3 px-6 rounded-lg hover:bg-gradient-to-l transition-all duration-300 disabled:opacity-70"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </Form>
        )}
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
        toastClassName="border border-gray-200 shadow-lg"
      />

      {showConfetti && (
        <Confetti
          width={typeof window !== 'undefined' ? window.innerWidth : 0}
          height={typeof window !== 'undefined' ? window.innerHeight : 0}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}
    </div>
  );
};

export default ContactForm;