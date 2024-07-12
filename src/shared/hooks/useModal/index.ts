import { useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeOpen = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeOpen,
  };
};
