import React from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { arrowVariants } from "@/effects/Effects";

export type BrilliantButtonVariant =
  | "gradient"
  | "white"
  | "transparent"
  | "outline";

interface BrilliantButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: BrilliantButtonVariant;
  className?: string;
  children: React.ReactNode;
  hasArrow?: boolean;
  containerClassName?: string;
}

const baseClasses =
  "cursor-pointer flex h-[50px]  justify-center items-center  rounded-[16px]  ";

const variantClasses: Record<BrilliantButtonVariant, string> = {
  gradient: 
  "border-[0.7px] border-white/60 " +
  "bg-[radial-gradient(80%_80%_at_50%_-20%,#56FFFF_0%,#00B9B9_100%)] " +
  "shadow-[0px_12px_60px_-12px_#23D5D5] text-white hover:opacity-90",
  transparent: "text-white hover:bg-transparent hover:text-white",
  white: "bg-white text-black hover:bg-gray-200",
  outline:
    "backdrop-blur-[301.6px] rounded-[49px] bg-[linear-gradient(95.41deg,rgba(255,255,255,0.08),rgba(15,15,31,0.37))] border border-[#23D5D5] text-white",
};

export const BrilliantButton: React.FC<BrilliantButtonProps> = ({
  variant = "gradient",
  className = "",
  children,
  hasArrow = true,
  containerClassName = "",
  ...props
}) => {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();
  const buttonVariant = variant === "transparent" ? "ghost" : undefined;

  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className={"inline-block " + containerClassName}
    >
      <Button
        className={classes}
        {...(buttonVariant ? { variant: buttonVariant } : {})}
        {...props}
      >
        <div className="flex items-center gap-2">
          {children}
          {hasArrow && (
            <motion.span variants={arrowVariants} className="flex-shrink-0">
              <MoveRight className="h-4 w-4" />
            </motion.span>
          )}
        </div>
      </Button>
    </motion.div>
  );
};

export default BrilliantButton;