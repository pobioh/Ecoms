// src/components/ImageModal.tsx
import { ArrowBack, ArrowForward, Close } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

interface ImageModalProps {
  imageUrls: string[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  imageUrls,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <Image
          src={imageUrls[currentIndex]}
          alt="Full Size"
          className="modal-image"
          width={0}
          height={0}
        />
        <button className="modal-close" onClick={onClose}>
          Close <Close />
        </button>
        <button
          className="modal-prev"
          onClick={onPrevious}
          disabled={currentIndex === 0}
        >
          <ArrowBack />
        </button>
        <button
          className="modal-next"
          onClick={onNext}
          disabled={currentIndex === imageUrls.length - 1}
        >
          <ArrowForward />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
