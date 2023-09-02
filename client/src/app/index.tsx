import "./index.css";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <header></header>
      <section>
        <aside></aside>
        <Outlet />
      </section>
      <footer></footer>
    </>
  );
}

export default Root;
