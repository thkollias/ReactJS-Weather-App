import { Fragment } from "react";
import useForecast from "../../hooks/useForecast";
import Header from "../../components/header";
import Form from "../../components/form";
import Footer from "../../components/footer";

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