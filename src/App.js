import appStyle from "./App.module.css";
import MainPage from "./routes/main-page";
import {ThemeContextProvider} from "./contexts/theme/ThemeContextProvider";

const App = () => {
  return (
    <div className={appStyle.App}>
      <ThemeContextProvider>
        <MainPage />
      </ThemeContextProvider>
    </div>
  );
}

export default App;