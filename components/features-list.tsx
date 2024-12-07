import * as React from "react";
import { Check } from "@phosphor-icons/react/dist/ssr";

export default function FeaturesList() {
  return (
    <React.Fragment>
      <div className="flex items-center space-x-2">
        <Check size={24} className="text-gray-500" />
        <span className="text-gray-800">No design skills required.</span>
      </div>
      <div className="flex items-center space-x-2">
        <Check size={24} className="text-gray-500" />
        <span className="text-gray-800">Quick Setup in Minutes.</span>
      </div>
      <div className="flex items-center space-x-2">
        <Check size={24} className="text-gray-500" />
        <span className="text-gray-800">Start with 5 Free Presentations.</span>
      </div>
    </React.Fragment>
  );
}
