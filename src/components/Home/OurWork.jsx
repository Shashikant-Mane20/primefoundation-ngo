"use client";

const OurWork = () => {
  return (
    <section className="bg-white py-16 text-black">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-[#f97316] mb-8">
            Showcasing some of our most innovative and impactful work.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white border border-[#16a34a] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Image */}
            <img
              src="https://via.placeholder.com/600x400"
              alt="Project 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-[#111827]">Project One</h3>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae arcu risus. Donec vestibulum dui in mi faucibus, non convallis odio convallis.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-[#16a34a] font-semibold hover:text-[#111827] transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white border border-[#f97316] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Image */}
            <img
              src="https://via.placeholder.com/600x400"
              alt="Project 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-[#111827]">Project Two</h3>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus nulla et feugiat vehicula. Vestibulum eget diam at sapien feugiat cursus.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-[#f97316] font-semibold hover:text-[#111827] transition"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white border border-[#111827] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
            {/* Image */}
            <img
              src="https://via.placeholder.com/600x400"
              alt="Project 3"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-[#111827]">Project Three</h3>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet varius ipsum, vel convallis sapien. Nulla facilisi. Quisque nec vestibulum erat.
              </p>
              <a
                href="#"
                className="inline-block mt-4 text-[#111827] font-semibold hover:text-[#f97316] transition"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
