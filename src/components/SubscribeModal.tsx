"use client";

import { FC } from "react";
import { X as CloseIcon } from "lucide-react";
import BrilliantButton from "./widgets/BrilliantButtons";
import { motion, AnimatePresence } from "framer-motion";

interface SubscribeModalProps {
  open: boolean;
  onClose: () => void;
}

const SubscribeModal: FC<SubscribeModalProps> = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 14 }}
            className="relative bg-teal-950 border border-white/10 rounded-2xl p-8 w-full max-w-lg text-white shadow-[0_0_40px_rgba(0,255,255,0.08)]"
          >
            {/* Gradient glowing border effect */}
         

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-1 text-white/70 hover:text-white transition"
              aria-label="Close modal"
            >
              <CloseIcon className="h-5 w-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-5 text-center">
  <h2 className="text-2xl md:text-3xl font-semibold text-white">
    Thank You for Subscribing!
  </h2>
  <p className="text-gray-100">
    Welcome to the <span className="text-cyan-400">Brilliant AI</span> community. We’re thrilled to have you on board.
  </p>
  <p className="text-gray-100">
    You’ll now receive our latest insights, news, and exclusive updates straight to your inbox. We’re committed to helping you unlock the full potential of AI — one email at a time.
  </p>
  <p className="text-gray-100">
    If you ever have questions or need assistance, don’t hesitate to reach out. We’re here to help.
  </p>
  <p className="text-gray-100 font-bold text-sm">– The Brilliant AI Team</p>
  <div className="pt-4">
    <BrilliantButton onClick={onClose} hasArrow={false} className="px-6">
      Close
    </BrilliantButton>
  </div>
</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;
