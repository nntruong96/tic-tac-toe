import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}
export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      className="fixed w-[100dvw] inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={() => {
        if (!onClose) return;
        onClose();
      }}
    >
      <div className="relative min-h-[266px] gap-4 flex flex-col items-center justify-center bg-navy-500 rounded-lg py-6 px-2 w-full ">
        {children}
      </div>
    </div>,
    document.body
  );
}
