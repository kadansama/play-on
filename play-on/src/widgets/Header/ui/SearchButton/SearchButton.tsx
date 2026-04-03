import { memo } from 'react';
import { ClosedBtn } from './ui/closedBtn'
import { OpenBtn } from './ui/openBtn'

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export const SearchButton = memo(({ isOpen, toggle }: Props) => {
  return isOpen ? <OpenBtn onClick={toggle} /> : <ClosedBtn onClick={toggle} />;
});
