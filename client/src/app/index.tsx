import "./index.css";
import { APIKeyProvider } from "shared/context/api-key";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "shared/ui";

function Root() {
  return (
    <APIKeyProvider>
      <Header />
      <section
        style={{
          minHeight: "calc(100vh - 125px)",
          display: "flex",
          padding: "55px 60px 70px",
        }}
      >
        <Outlet />
      </section>
      <Footer />
    </APIKeyProvider>
  );
}

export default Root;
