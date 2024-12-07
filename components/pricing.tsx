export default function Pricing() {
  const plans = [
    {
      name: "Basic Plan",
      desc: "Perfect for individuals looking to create simple, yet impactful presentations.",
      price: 12,
      isMostPop: false,
      features: [
        "Effortless slide generation",
        "Access to basic themes",
        "Text summarization",
        "Image integration",
        "Limited AI-generated visuals",
        "Basic customer support",
      ],
    },
    {
      name: "Startup Plan",
      desc: "Ideal for startups aiming to create visually stunning presentations.",
      price: 35,
      isMostPop: true,
      features: [
        "All Basic Plan features",
        "Premium themes and layouts",
        "Advanced AI-driven content creation",
        "Customizable color schemes",
        "Priority customer support",
        "Up to 10 projects per month",
      ],
    },
    {
      name: "Enterprise Plan",
      desc: "For businesses needing comprehensive tools to build professional presentations.",
      price: 60,
      isMostPop: false,
      features: [
        "All Startup Plan features",
        "Unlimited projects",
        "Enterprise-grade security",
        "Team collaboration tools",
        "Dedicated account manager",
        "Advanced analytics and insights",
      ],
    },
  ];

  return (
    <section id="pricing" className="custom-screen py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Pricing Plans for Every Need
          </h3>
          <div className="mt-3 max-w-xl">
            <p>
              Slideify offers flexible pricing plans designed to help you create
              beautiful presentations effortlessly, whether you&apos;re an
              individual or a large team.
            </p>
          </div>
        </div>
        <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          {plans.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${
                item.isMostPop
                  ? "bg-blue-50 border-blue-600 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              {item.isMostPop && (
                <div className="absolute -top-3 inset-x-0 flex justify-center">
                  <span className="bg-blue-600 text-white text-sm font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8 space-y-4 border-b">
                <span className="text-blue-600 font-medium">{item.name}</span>
                <div className="text-gray-800 text-3xl font-semibold">
                  ${item.price}{" "}
                  <span className="text-xl text-gray-600 font-normal">/mo</span>
                </div>
                <p>{item.desc}</p>
                <button className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700">
                  Get Started
                </button>
              </div>
              <ul className="p-8 space-y-3">
                <li className="pb-2 text-gray-800 font-medium">
                  <p>Features</p>
                </li>
                {item.features.map((featureItem, idx) => (
                  <li key={idx} className="flex items-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    {featureItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
