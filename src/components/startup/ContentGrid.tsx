import React from 'react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '130+', label: 'AI solutions successfully delivered' },
  { value: '98%', label: 'Internal quality assurance success rate' },
  { value: '40%', label: 'Year over year team growth and capability' },
  { value: '5',   label: 'Supporting startup teams from idea to launch' },
];

export default function ContentGrid() {
  return (
    <section className="relative py-10 px-32 bg-[#011010]/50 ">
      <div className="grid grid-cols-2  lg:items-start ">
        {/* Left text column */}
        <div className=" space-y-8 w-[70%]">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            AI-Powered Solutions for Startup Success
          </h2>
          <div className="space-y-4 text-white/80 leading-relaxed">
            <p>
              Brilliant AI is your dedicated technology partner, focused on
              delivering AI-powered product development for startups. Whether
              you’re building an MVP or scaling your core platform, we bring
              the technical expertise to turn ambitious ideas into investor-ready,
              real-world solutions.
            </p>
            <p>
              We cover the entire delivery pipeline, including machine learning,
              web development, automation, and system integration. Our structured,
              results-driven approach ensures every product is built for speed,
              quality, and long-term growth.
            </p>
            <p>
              Looking to validate an idea, accelerate development, or launch a
              complete AI product? We’re ready when you are.
            </p>
          </div>
        </div>

        {/* Right stats card */}
        <div className="relative w-full lg:w-1/2">
          {/* subtle radial glow behind the card */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(ellipse_at_center,rgba(35,213,213,0.15),transparent_70%)]
              blur-lg
              pointer-events-none
            "
          />

          <div className="relative bg-[#0A1F1E]/60 backdrop-blur-lg border border-gray-700 rounded-xl p-6 space-y-6">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-white/60">{stat.label}</span>
                </div>
                {idx < stats.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-[#00AEFF] to-[#00FF52] opacity-60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
