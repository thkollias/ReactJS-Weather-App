import { Fragment } from "react";
import { useFetchedData } from "../../hooks/useFetchedData";
import { Header } from "../../components/header";
import { Form } from "../../components/form";
import { Loading } from "../../components/loading"
import { Error } from "../../components/error"
import { Data } from "../../components/data"
import { Footer } from "../../components/footer";

const MainPage = () => {
  const {isLoading, isError, data, pageCallback} = useFetchedData();

  const formCallback = (userInput) => {
    console.log(`From: MainPage - ${userInput}`);
    pageCallback(userInput);
  }

  return (
    <Fragment>
      <Header />
      {!isLoading && <Form pageCallback={formCallback} />}
      {isLoading && <Loading />}
      {isError && <Error />}
      {data && <Data />}
      <Footer />
    </Fragment>
  );
}

export default MainPage;