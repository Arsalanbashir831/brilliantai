import React from 'react';

import BrilliantButton from '../widgets/BrilliantButtons';
import { User, ArrowRightCircle } from 'lucide-react';
import Image from 'next/image';

export default function InternalAIAssistants() {
  return (
    <section className="relative w-[90%]    bg-[linear-gradient(110.72deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)]
        shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        backdrop-blur-[30px] rounded-2xl border border-gray-800  p-8 md:p-12 lg:p-8 overflow-hidden">
      <div >
        {/* Left content */}
        <div className="flex flex-col justify-evenly align-baseline items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Internal AI Assistants
            </h2>
            <p className="text-lg w-[47%] text-teal-200 leading-relaxed">
              Equip teams with AI-powered tools that enable fast information retrieval,
              content generation and task execution.
            </p>
            <div className='flex justify-between items-start gap-15 '>
            <BrilliantButton  variant="white" className='mt-6 col-span-1' >
            Get in Touch
          </BrilliantButton>
          <div className="space-y-4 ">
          {/* Assistant selector */}
          <div className="flex items-center border border-gray-600 rounded-lg p-2 backdrop-blur-md">
            <input
              type="text"
              readOnly
              value="Marketing AI Assistant"
              className="flex-1 bg-transparent text-white px-4 py-2 placeholder-gray-400 focus:outline-none"
            />
            <button className="p-2 rounded-lg bg-[#23D5D5]/20 hover:bg-[#23D5D5]/30 transition">
              <ArrowRightCircle className="w-6 h-6 text-teal-300" />
            </button>
          </div>

          {/* Role description card */}
          <div className="border border-gray-600 rounded-lg p-4 backdrop-blur-md space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-gray-700 p-2 rounded-full flex items-center justify-center">
                <User className="w-4 h-4  text-teal-300" />
              </div>
              <p className="text-white text-sm leading-snug">
                You are a Marketing executive assisting sales. Your role is to create
                engaging & informative content for various...
              </p>
            </div>

            <div className="flex items-center justify-between border border-gray-600 rounded-lg p-2 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                {/* <BarChart2 className="w-5 h-5 text-teal-300" /> */}
                <Image src={'/home/outcome/mingcute_voice-line.svg'} alt='wave' width={20} height={20}/>
                <span className="text-white text-sm">Brand Voice</span>
              </div>
              <div className="flex items-center gap-1 bg-[#23D5D5]/20 text-teal-300 text-xs font-medium px-3 py-1 rounded-full">
                {/* <div className="w-3 h-3 bg-teal-300 rounded-full flex-shrink-0" /> */}
                <Image src={'/home/outcome/lets-icons_check-fill.svg'} width={20} height={20} alt='check'/>
                <span>Trained</span>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
       
        </div>

        {/* Right content */}
      
      </div>

      {/* Footer note */}
      <div className="mt-8 flex items-center gap-2">
        <div className="w-5 h-5 text-teal-300">
        <Image src={'/home/outcome/lets-icons_check-fill.svg'} width={20} height={20} alt='check'/>
        </div>
        <p className="text-white text-sm">
          Boosts productivity across departments from marketing to operations.
        </p>
      </div>
    </section>
  );
}