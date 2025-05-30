import Image from "next/image";

const trustItems = [
  {
    src: "/contact-us/real-delivery.svg",
    alt: "Real Delivery",
    title: "Built for real delivery",
    description: "We design, build and deploy intelligent systems that scale",
  },
  {
    src: "/contact-us/team.svg",
    alt: "Product Teams",
    title: "Trusted by product teams",
    description: "Startups and organisations rely on us to deliver what matters",
  },
  {
    src: "/contact-us/ri_speak-ai-fill.svg",
    alt: "Deep AI Capability",
    title: "Deep AI capability",
    description: "From LLMs to automation, we turn complex technology into working solutions",
  },
];

export function TrustSection() {
  return (
    <section className="px-6 py-16 ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-6xl font-bold text-white mb-4">
            Why Clients Trust Us
          </h2>
          <p className="text-gray-400 text-lg">Discover What Makes Us Different</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="p-[2px] rounded-2xl   transition-shadow"
            >
               <div
                className={`bg-cyan-900/10 backdrop-blur-md rounded-[inherit] flex flex-col items-center text-center space-y-4 p-8 border-1 border-cyan-900 ${
                  idx === 1 ? 'md:p-12' : ''
                }`}
               >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={84}
                  height={84}
                  className="mx-auto"
                />
				<div
				style={{
					backgroundImage:
					  'radial-gradient(circle at top, #004D53, #000E0E)',
				  }}
				className="p-8 rounded-2xl  backdrop-blur-lg space-y-2 ">
				<h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
				</div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
