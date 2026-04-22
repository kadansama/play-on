import { Box, useMediaQuery } from "@mui/material"
import styles from './styles.module.css'
import { SearchButton } from "../SearchButton/SearchButton"
import { Profile } from "features/Profile"
import { memo, useEffect } from "react"

interface HeaderActionProps {
  isOpen: boolean;
  onToggleSearch: () => void;
}

export const HeaderAction = memo(({ isOpen, onToggleSearch }: HeaderActionProps) => {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen) {
      html.classList.add('no-scroll');
      body.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
      body.classList.remove('no-scroll');
    }

    return () => {
      html.classList.remove('no-scroll');
      body.classList.remove('no-scroll');
    };
  }, [isOpen]);
  return (
    <Box className={`${styles.header__action} ${isOpen ? styles.header__actionOpen : ""}`}>
      {/* <LangSelect /> */}
      <SearchButton isOpen={isOpen} toggle={onToggleSearch} />
      {isDesktop && (
        <Profile />
      )}
      {/* <BuyButton /> */}
      {/* <Notification /> */}

    </Box>
  )
});

