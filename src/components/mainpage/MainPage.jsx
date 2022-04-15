import { Fragment } from "react";
import Footer from "../footer/Footer";
import Form from "../form";
import Header from "../header";

const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <Form />
      <Footer />
    </Fragment>
  );
}

export default MainPage;