"use client";

const OurVision = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
            Our Vision
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[#f97316] mb-8">
            Envisioning a future where innovation meets sustainable growth for all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Card 1 */}
          <div className="bg-white text-black border border-[#16a34a] rounded-lg shadow-lg p-6">
            {/* Vision Card Image */}
            <img
              src="https://via.placeholder.com/500x300"
              alt="Vision Image 1"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#16a34a]">Sustainable Innovation</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut auctor purus non justo tincidunt, in iaculis augue cursus.
              Phasellus vestibulum quam vel orci vehicula, at malesuada erat elementum. Nullam at posuere tortor. Proin sollicitudin nisl non augue tincidunt, a sodales nulla fermentum.
            </p>
          </div>

          {/* Vision Card 2 */}
          <div className="bg-white text-black border border-[#f97316] rounded-lg shadow-lg p-6">
            {/* Vision Card Image */}
            <img
              src="https://via.placeholder.com/500x300"
              alt="Vision Image 2"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#f97316]">Community Impact</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis imperdiet nunc, at suscipit metus aliquam in.
              Sed sollicitudin leo vitae ligula tincidunt, non dignissim nunc pretium. Ut ultricies sem nec mi iaculis suscipit.
            </p>
          </div>

          {/* Vision Card 3 */}
          <div className="bg-white text-black border border-[#111827] rounded-lg shadow-lg p-6">
            {/* Vision Card Image */}
            <img
              src="https://via.placeholder.com/500x300"
              alt="Vision Image 3"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4 text-[#111827]">Global Reach</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique tristique ipsum, nec facilisis risus scelerisque eget.
              Vestibulum dapibus sit amet felis ac tristique. In malesuada enim vitae posuere tincidunt. Sed laoreet tristique dui, nec convallis velit suscipit non.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
