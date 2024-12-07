"use client";
import React from "react";
import { toast } from "sonner";
import { z } from "zod";
import axios from "axios";

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name must be at least 1 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

export default function Contact() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const errorMessages = result.error.format();
      setErrors({
        fullName: errorMessages.fullName?._errors[0] || "",
        email: errorMessages.email?._errors[0] || "",
        message: errorMessages.message?._errors[0] || "",
      });
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/send", formData);
      toast.success(
        "Thank you for reaching out! We will get back to you soon."
      );
      setFormData({ fullName: "", email: "", message: "" });
      setErrors({});
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      toast.error("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 sm:py-24">
      <div
        className="z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8"
        id="contact"
      >
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto text-center sm:px-0">
          <h3 className="text-blue-600 font-semibold">Contact</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-600">
            We’d love to hear from you! Please fill out the form below.
          </p>
        </div>
        <div className="px-4">
          <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 rounded-xl shadow-md border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className={`w-full px-4 py-2 text-white font-medium rounded-lg duration-150 ${
                  loading
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-gray-800 hover:bg-gray-700 active:bg-gray-900"
                }`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
