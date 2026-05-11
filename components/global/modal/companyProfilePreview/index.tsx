"use client";

import { useEffect, useRef } from "react";
import { MdOutlineCancel, MdDownload } from "react-icons/md";

interface CompanyProfilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  previewUrl: string;
  downloadUrl: string;
  downloadTitle: string;
  previewTitle: string;
  downloadBtnText: string;
  closeBtnText: string;
}

export default function CompanyProfilePreviewModal({
  isOpen,
  onClose,
  previewUrl,
  downloadUrl,
  downloadTitle,
  previewTitle,
  downloadBtnText,
  closeBtnText,
}: CompanyProfilePreviewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Close on backdrop click
  function handleBackdropClick(e: React.MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  }

  if (!isOpen) return null;

  return (
    <section
      onClick={handleBackdropClick}
      className="w-full z-50 fixed bg-black/40 backdrop-blur-sm flex items-center justify-center top-0 left-0 right-0 bottom-0 p-4"
    >
      <div
        ref={modalRef}
        className="w-full max-w-5xl h-[90vh] bg-white rounded-xl overflow-hidden flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 shrink-0">
          <h2 className="text-xl font-semibold text-blue_itm_good truncate pr-4">
            {previewTitle}
          </h2>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={downloadUrl}
              download
              title={downloadTitle}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue_itm_good hover:bg-blue_itm_aqua_marine rounded-full transition duration-300"
            >
              <MdDownload size={18} />
              <span className="hidden sm:inline">{downloadBtnText}</span>
            </a>
            <button
              onClick={onClose}
              title={closeBtnText}
              className="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-red-500 hover:bg-gray-100 transition duration-200"
            >
              <MdOutlineCancel size={22} />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1 bg-gray-100">
          <iframe
            src={previewUrl}
            title={previewTitle}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </section>
  );
}
