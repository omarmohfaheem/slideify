"use client";
import * as React from "react";
import { Palette, Robot, RocketLaunch } from "@phosphor-icons/react/dist/ssr";
import { motion, useInView } from "framer-motion";

export default function Features() {
  const ref = React.useRef<HTMLUListElement>(null!);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: <RocketLaunch size={24} />,

      title: "Efficient Content Creation",
      desc: "Leverage advanced AI to effortlessly create PowerPoint presentations. Simply input your content, and our application will organize and summarize it for each slide, ensuring a smooth integration of visuals and information that leaves a lasting impression.",
    },
    {
      icon: <Palette size={24} />,
      title: "Customizable Themes",
      desc: "Add a personal flair to your presentations by selecting color themes that suit your style. Our user-friendly tools make it easy to choose vibrant colors that reflect your personality, ensuring your presentation feels uniquely yours.",
    },
    {
      icon: <Robot size={24} />,
      title: "AI-Powered Visuals",
      desc: "Take your presentations to the next level with AI-driven visual enhancements. Our tool automatically sources or generates images and designs that perfectly align with your content, making your slides both informative and visually compelling for maximum impact.",
    },
  ];

  return (
    <section className="py-16 sm:py-24" id="features">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl mx-auto space-y-3 text-center">
          <h3 className="text-blue-600 font-semibold">Features</h3>
          <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Simplify Your Presentation Process
          </p>
          <p>
            With Slideify, quickly transform your ideas into stunning
            presentations. Create professional slides in minutes, focusing on
            your content while seamlessly integrating images and text for a
            lasting impact.
          </p>
        </div>
        <div className="mt-12">
          <ul
            className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3"
            ref={ref}
          >
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: idx * 0.1 }}
                className="flex gap-x-4"
              >
                <div className="flex-none w-12 h-12 bg-blue-50 shadow-md text-blue-600 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
