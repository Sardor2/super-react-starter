import { useState } from 'react';

const useToggle = (initialState?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialState ?? false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = isOpen ? close : open;
  return { isOpen, close, open, toggle };
};

export default useToggle;
