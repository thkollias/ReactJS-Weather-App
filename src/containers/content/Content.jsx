import useFetchedData from "../../hooks/useFetchedData"
import { FormInput } from "../../components/form-input";
import { Error } from "../../components/error"
import { Loading } from "../../components/loading"
import { Data } from "../../components/data"

const Content = () => {
  const {isLoading, isError, data, submitRequest,} = useFetchedData();
  
  const userInputCallback = (userInput) => {
    console.log(userInput);
    submitRequest(userInput);
    // console.log(citiesData);
  }

  return (
    <div>
      {!isLoading && <FormInput getValueCallback={userInputCallback} />}
      {isError && <Error message={isError} />}
      {isLoading && <Loading />}

    </div>
  );
}

export default Content;