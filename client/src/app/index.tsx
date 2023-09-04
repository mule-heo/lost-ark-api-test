import "./index.css";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "shared/ui";

function Root() {
  return (
    <>
      <Header />
      <section style={{ minHeight: "calc(100vh - 125px)" }}>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}

export default Root;
