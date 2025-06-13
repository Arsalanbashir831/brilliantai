"use client";

import { FC } from "react";
import { X as CloseIcon } from "lucide-react";
import BrilliantButton from "./widgets/BrilliantButtons";

interface SubmissionModalProps {
  open: boolean;
  onClose: () => void;
}

const SubmissionModal: FC<SubmissionModalProps> = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000069] bg-opacity-50 backdrop-blur-sm">
      <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 w-full max-w-md text-center text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 text-white hover:text-gray-300"
          aria-label="Close modal"
        >
          <CloseIcon className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-semibold mb-4">Submission Successful</h2>
        <p className="mb-6 text-gray-200">
          Thank you for your submission! Our Brilliant AI team will contact you soon within 1–2 business days via email.
        </p>
       <BrilliantButton  onClick={onClose} hasArrow={false} >
       OK , I Understand !
       </BrilliantButton>
      </div>
    </div>
  );
};

export default SubmissionModal;
