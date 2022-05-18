import contentStyles from "./Content.module.css";
import useFetchedData from "../../hooks/useFetchedData";
import { FormInput } from "../../components/form-input";
import { Error } from "../../components/error";
import { Loading } from "../../components/loading";
import { Display } from "../../components/display";

const Content = () => {
  const {isLoading, isError, data, submitRequest,} = useFetchedData();
  
  const userInputCallback = (userInput) => {
    console.log(userInput);
    submitRequest(userInput);
  }

  return (
    <div className={contentStyles.Content}>
      {!isLoading && <FormInput getValueCallback={userInputCallback} />}
      {isError && <Error message={isError} />}
      {isLoading && <Loading />}
      {data && <Display props={data} />}
    </div>
  );
}

export default Content;