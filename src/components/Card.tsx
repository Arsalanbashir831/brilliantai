// components/Card.tsx
'use client';

import React from 'react';
import Image from "next/image";
import { ShineBorder } from "./magicui/shine-border";
import { motion } from "framer-motion";
import { zoomVariants } from '@/effects/Effects';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  /** horizontal padding around the image—defaults to 32px each side */
  imagePadding?: string;
}

export default function Card({
  imageSrc,
  title,
  description,
  imagePadding = "px-8",
}: CardProps) {
  return (
    <motion.div
      className="
        rounded-2xl
        overflow-hidden
        border border-white/10
        bg-[linear-gradient(110.72deg,_rgba(77,77,77,0.24)_1.21%,_rgba(151,151,151,0.04)_100%)]
        shadow-[inset_-20px_4px_120px_-80px_rgba(31,187,187,0.14)]
        backdrop-blur-[30px]
        flex flex-col
        py-8
        gap-y-2.5
      "
      variants={zoomVariants}
      initial="rest"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      style={{ transformOrigin: 'center' }}
    >
      {/* ShineBorder draws the glowing border around this card */}
      <ShineBorder shineColor={["#23D5D5", "#00FFFF"]} />

      {/* Image container */}
      <div className={`relative w-full h-40 flex flex-col items-center  ${imagePadding} overflow-hidden`}>
        <Image
          src={imageSrc}
          alt={title}
          // height={100}
          // width={300}
           fill
          className="object-contain"
          sizes="(min-width:1024px) 25vw, (min-width:640px) 40vw, 90vw"
          loading="lazy"
          decoding="async"
          priority={false}
          placeholder="blur"
          blurDataURL="/home/placeholder-blur.svg"
        />
      </div>

      {/* Content below the image */}
      <div className="px-8 text-left mt-6">
        <h3 className="text-2xl font-medium text-left text-white mb-2">
          {title}
        </h3>
        <p className="text-sm font-light text-left text-white/70">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
