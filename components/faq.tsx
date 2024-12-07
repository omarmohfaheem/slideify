"use client";
import * as React from "react";
import { motion, useInView } from "framer-motion";

const navigation = [
  { title: "Features", path: "features" },
  { title: "FAQs", path: "faq" },
  { title: "Contact", path: "contact" },
];

const scrollToSection = (id: string) => {
  const item = navigation.find((navItem) => navItem.path === id);
  if (item) {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = document.querySelector("header")?.offsetHeight || 0;
      const topPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  }
};

export default function FAQ() {
  const ref = React.useRef<HTMLDivElement>(null!);
  const isInView = useInView(ref, { once: true });
  const faqsList = [
    {
      q: "What is Slideify?",
      a: "Slideify is an intuitive platform that allows you to effortlessly create professional PowerPoint presentations from your content in minutes. It uses advanced AI to help structure, summarize, and visually enhance your slides.",
    },
    {
      q: "How do I create a presentation with Slideify?",
      a: "Simply upload your document or input your text, and Slideify will automatically generate slides for you. You can customize themes and add images to make your presentation truly unique.",
    },
    {
      q: "Can I customize the design of my slides?",
      a: "Yes! Slideify allows you to choose from a variety of themes and customize colors to match your personal or brand style, ensuring your presentation is both professional and engaging.",
    },
    {
      q: "Does Slideify support adding images?",
      a: "Absolutely! Slideify uses AI-powered image generation to find or create visuals that enhance your content, ensuring your slides are both informative and visually appealing.",
    },
    {
      q: "Is there a free version of Slideify?",
      a: "Yes, Slideify offers a free version that provides basic functionality. For more advanced features like theme customization and AI-generated visuals, you can explore our premium plans.",
    },
    {
      q: "Can I use Slideify offline?",
      a: "Currently, Slideify is a web-based platform and requires an internet connection to generate and customize your presentations.",
    },
  ];

  return (
    <section className="py-10 sm:py-24">
      <section
        id="faq"
        className="leading-relaxed max-w-screen-xl mt-12 mb-12 mx-auto px-4 md:px-8"
      >
        <div className="space-y-3 text-center">
          <h3 className="text-blue-600 font-semibold">FAQs</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </p>
          <p className="text-gray-600 max-w-lg mx-auto">
            Have questions about Slideify? We&apos;ve got answers. If you need
            further assistance, feel free to{" "}
            <button
              className="hover:underline text-blue-600"
              onClick={() => scrollToSection("contact")}
            >
              contact us.
            </button>
          </p>
        </div>
        <div
          className="mt-14 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 "
          ref={ref}
        >
          {faqsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className="space-y-3 mt-5"
            >
              <h4 className="text-xl text-gray-700 font-medium">{item.q}</h4>
              <p className="text-gray-500">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </section>
  );
}
