import "./index.css";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "shared/ui";

function Root() {
  return (
    <>
      <Header />
      <section
        style={{
          minHeight: "calc(150vh - 125px)",
          display: "flex",
          padding: "55px 60px 70px",
        }}
      >
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default Root;
