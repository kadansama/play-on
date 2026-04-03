import { Box } from "@mui/material"
import styles from './styles.module.css'
import { LangSelect } from "features/LangSelect/ui"
import { SearchButton } from "../SearchButton/SearchButton"
import { BuyButton } from "features/BuyButton"
import { Profile } from "features/Profile"
import { Notification } from "features/Notification"
import { memo } from "react"

interface HeaderActionProps {
  isOpen: boolean;
  onToggleSearch: () => void;
}

export const HeaderAction = memo(({ isOpen, onToggleSearch }: HeaderActionProps) => {
  return (
    <Box className={`${styles.header__action} ${isOpen ? styles.header__actionOpen : ""}`}>
      <LangSelect/>
      <SearchButton isOpen={isOpen} toggle={onToggleSearch} />
      <BuyButton />
      <Notification/>
      <Profile/>
    </Box>
  )
});

