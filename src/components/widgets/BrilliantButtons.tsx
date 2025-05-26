import React from 'react';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import { MoveRight } from 'lucide-react';
import { arrowVariants } from '@/effects/Effects';

export type BrilliantButtonVariant = 'gradient' | 'white' | 'transparent'|'outline';

interface BrilliantButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BrilliantButtonVariant;
}

const baseClasses =
  'cursor-pointer flex h-[52px] px-[32px] py-[13px] justify-center items-center gap-[10px] rounded-[16px] text-lg font-medium transition';

  const variantClasses: Record<BrilliantButtonVariant, string> = {
    gradient:
      'border-[0.7px] border-white/60 bg-[radial-gradient(128.85%_128.85%_at_50.32%_-28.85%,#56FFFF_0%,#00B9B9_100%)] shadow-[0px_12px_112.4px_-12px_#23D5D5] text-white hover:opacity-90',
    transparent: 'text-white hover:bg-transparent hover:text-white',
    white: 'bg-white text-black hover:bg-gray-200',
    outline: 'backdrop-blur-[301.6px] rounded-[49px] bg-[linear-gradient(95.41deg,rgba(255,255,255,0.08),rgba(15,15,31,0.37))] border border-[#23D5D5] text-white',
  };



export const BrilliantButton: React.FC<BrilliantButtonProps> = ({
  variant = 'gradient',
  className = '',
  children,
  ...props
}) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
  const buttonVariant = variant === 'transparent' ? 'ghost' : undefined;

  return (
    <motion.div
   
      initial="rest"
      whileHover="hover"
      className="inline-block"
    >
      <Button className={classes} {...(buttonVariant ? { variant: buttonVariant  } : {})} {...props}>
        <div className="flex items-center gap-2">
          {children}
          <motion.span variants={arrowVariants} className="flex-shrink-0">
            <MoveRight className="h-4 w-4" />
          </motion.span>
        </div>
      </Button>
    </motion.div>
  );
};

export default BrilliantButton;
