// widgets/Layout/PageWrapper.tsx
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "shared/ui";

type PageWrapperProps = {
  children: ReactNode;
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return isHome ? <>{children}</> : <Container>{children}</Container>;
};
