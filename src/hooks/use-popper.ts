import { useState } from 'react';

interface PopperState {
  close: () => void;
  open: (event: React.MouseEvent<HTMLElement>) => void;
  toggle: (event: React.MouseEvent<HTMLElement>) => void;
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  id: 'simple-popover' | undefined;
}

const usePopper = (): PopperState => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = !!anchorEl;
  const open = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const close = () => {
    setAnchorEl(null);
  };
  const toggle = (event: React.MouseEvent<HTMLElement>) => {
    if (isOpen) {
      close();
    } else {
      open(event);
    }
  };

  const id = isOpen ? 'simple-popover' : undefined;
  return { close, open, id, anchorEl, toggle, isOpen };
};

export const bindToggle = (state: PopperState) => ({
  'aria-describedby': state.id,
  onClick: state.toggle,
});

export const bindPopper = (state: PopperState) => ({
  id: state.id,
  open: state.isOpen,
  anchorEl: state.anchorEl,
  onClose: state.close,
});

export default usePopper;
