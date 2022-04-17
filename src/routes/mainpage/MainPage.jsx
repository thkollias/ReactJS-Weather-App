import { Fragment } from "react";
import { useData } from "../../hooks/useData";
import { Header } from "../../components/header";
import { Form } from "../../components/form";
import { Loading } from "../../components/loading"
import { Error } from "../../components/error"
import { Data } from "../../components/data"
import { Footer } from "../../components/footer";

const MainPage = () => {
  const {isLoading, isError, data} = useData();

  return (
    <Fragment>
      <Header />
      {!isLoading && <Form />}
      {isLoading && <Loading />}
      {isError && <Error />}
      {data && <Data />}
      <Footer />
    </Fragment>
  );
}

export default MainPage;