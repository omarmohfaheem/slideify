"use client";
import NavLink from "./nav-link";
import SectionWrapper from "./ui/section-wrapper";
import { motion } from "framer-motion";
import FeaturesList from "@/components/features-list";

export default function CTA() {
  return (
    <SectionWrapper className="text-gray-600 mt-24">
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 1.2 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
            Transform Text into Stunning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5179e5] to-[#2563EB]">
              Slides with Ease
            </span>
          </h1>

          <p className="max-w-xl mx-auto">
            From documents to engaging presentations in minutes. Simplify your
            workflow with Slideify.
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-md">
            <NavLink
              href="/sign-up"
              className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 rounded-lg duration-150 py-2.5 px-4"
            >
              Get Started
            </NavLink>
            {/* <NavLink
              href="#cta"
              className="text-gray-700 border hover:bg-gray-50"
              scroll={false}
            >
              Learn more
            </NavLink> */}
          </div>
        </div>
        <div className="flex flex-col gap-x-6 gap-y-4 items-center justify-center md:flex-row text-sm mt-8">
          <FeaturesList />
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
