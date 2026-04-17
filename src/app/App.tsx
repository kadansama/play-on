import { Outlet } from "react-router-dom";
import { Header } from "widgets/Header";
import { routesConfig } from "./routing/routesConfig";
import { Footer } from "widgets/Footer";
import { PageWrapper } from "widgets/Layout/PageWrapper";
import { MobileBottomBar } from "widgets/MobileBottomBar";

function App() {
  return (
    <div className="app">
      <Header routes={routesConfig} />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
      <MobileBottomBar />
      <Footer />
    </div>
  );
}

export default App;
