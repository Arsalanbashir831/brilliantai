import React from 'react'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

interface ReadMoreButtonProps {
  href: string
  children?: React.ReactNode
  className?: string
}

const ReadMoreButton: React.FC<ReadMoreButtonProps> = ({
  href,
  children = 'Read More',
  className = '',
}) => {
  return (
    <>
      {/* Inline CSS: keyframes + only animate arrow when .group is hovered */}
      <style>
        {`
          @keyframes arrowBackForth {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(5px);
            }
          }

          /* Only run the arrow animation while parent (.group) is hovered */
          .group:hover .arrow-animate {
            animation: arrowBackForth 1s ease-in-out infinite;
          }
        `}
      </style>

      <Button
        className={`
          border 
          w-full p-5 md:p-0 md:w-auto 
          bg-[#141414] hover:bg-[#141414]   /* keep same bg on hover */
          border-[#262626] 
          group 
          ${className}
        `}
        asChild
      >
        <a href={href} className="flex items-center">
          {children}
          <ArrowRight
            className="arrow-animate ml-2 w-4 h-4 text-[#23D5D5] -rotate-45"
          />
        </a>
      </Button>
    </>
  )
}

export default ReadMoreButton
