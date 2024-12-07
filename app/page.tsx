import * as React from "react";

import Features from "@/components/features";
import CTA from "@/components/cta";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <CTA />
      <Features />
      <FAQ />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}
