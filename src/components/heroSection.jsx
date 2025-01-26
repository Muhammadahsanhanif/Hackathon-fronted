import React from "react";
import HomeCard from "./homeCards";

export default function HeroSection() {
  return (
   <>
    <section className="bg-blue-800 text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-16 lg:flex lg:items-center lg:justify-between">
        <div className="mb-8 lg:mb-0 lg:max-w-lg">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Welcome to Your Platform
            <span className="block text-blue-400">Empower Your Journey</span>
          </h1>
          <p className="mt-4 text-gray-400">
            Build something amazing with our tools, services, and platform. Let
            us help you achieve your goals with ease and efficiency.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 text-lg font-medium text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s"
            alt="Hero Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
    <HomeCard/>
   </>

  );
}
