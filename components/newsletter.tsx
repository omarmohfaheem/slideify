"use client";
import * as React from "react";
import { toast } from "sonner";

export default function Newsletter() {
  const [email, setEmail] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.info("Please enter your email!");
      return;
    }
    toast.success("Subscribed successfully!");
  };

  return (
    <section className="py-24 custom-screen mx-auto">
      <div className="relative overflow-hidden mx-4 px-4 py-14 rounded-2xl bg-blue-600 md:px-8 md:mx-8">
        <div className="relative z-10 max-w-xl mx-auto sm:text-center">
          <div className="space-y-3">
            <h3 className="text-3xl text-white font-bold">
              Stay Updated with Slideify!
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Be the first to know about our latest features, updates, and
              exclusive offers. Subscribe to our newsletter and transform your
              presentation experience!
            </p>
          </div>
          <div className="mt-6">
            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="text-gray-500 w-full p-2 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="p-2 px-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 duration-150 outline-none shadow-md focus:shadow-none sm:px-4">
                Subscribe
              </button>
            </form>
            <p className="mt-3 max-w-lg text-[15px] text-blue-100 sm:mx-auto">
              No spam ever! We value your privacy and will protect your data.
              Read our{" "}
              <a className="underline" href="#">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(268.24deg, rgba(59, 130, 246, 0.76) 50%, rgba(59, 130, 246, 0.545528) 80.61%, rgba(55, 48, 163, 0) 117.35%)",
          }}
        ></div>
      </div>
    </section>
  );
}
