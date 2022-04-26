import { Fragment } from "react";
import { Header } from "../../components/header";
import { Content } from "../../containers/content"
import { Footer } from "../../components/footer";

const MainPage = () => {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default MainPage;