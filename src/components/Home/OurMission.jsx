"use client";

const OurMission = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Our Mission
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#f97316] mb-8">
            We are dedicated to driving positive change by empowering communities and fostering sustainable development.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around">
          {/* Mission Card 1 */}
          <div className="bg-white text-black m-1 rounded-lg shadow-lg p-6 mb-6 md:mb-0 w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-[#16a34a]">Empowerment</h3>
            <p className="text-base">
              We work towards empowering individuals and communities by providing educational resources and opportunities for growth.
            </p>
          </div>

          {/* Mission Card 2 */}
          <div className="bg-white text-black  m-1 rounded-lg shadow-lg p-6 mb-6 md:mb-0 w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-[#f97316]">Sustainability</h3>
            <p className="text-base">
              Our focus is on creating a sustainable future through environmental initiatives and conscious consumption practices.
            </p>
          </div>

          {/* Mission Card 3 */}
          <div className="bg-white text-black m-1 rounded-lg shadow-lg p-6 w-full md:w-1/3">
            <h3 className="text-2xl font-semibold mb-4 text-[#111827]">Community</h3>
            <p className="text-base">
              We believe in the power of community, supporting local groups and creating networks that drive lasting impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
