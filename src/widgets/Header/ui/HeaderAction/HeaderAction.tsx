import { Box } from "@mui/material"
import styles from './styles.module.css'
import { LangSelect } from "features/LangSelect/ui"
import { SearchButton } from "../SearchButton/SearchButton"
import { BuyButton } from "features/BuyButton"
import { Profile } from "features/Profile"
import { Notification } from "features/Notification"
import { memo, useEffect } from "react"

interface HeaderActionProps {
  isOpen: boolean;
  onToggleSearch: () => void;
}

export const HeaderAction = memo(({ isOpen, onToggleSearch }: HeaderActionProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('no-scroll');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);
  return (
    <Box className={`${styles.header__action} ${isOpen ? styles.header__actionOpen : ""}`}>
      <LangSelect />
      <SearchButton isOpen={isOpen} toggle={onToggleSearch} />
      <BuyButton />
      <Notification />
      <Profile />
    </Box>
  )
});

