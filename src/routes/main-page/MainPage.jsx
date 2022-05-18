import mainPageStyle from "./MainPage.module.css";
import { useContext } from "react";
import { Header } from "../../components/header";
import { ThemeButton } from "../../components/themebutton";
import { Content } from "../../containers/content"
import { Footer } from "../../components/footer";
import { ThemeContext } from "../../contexts/theme/ThemeContext";

const MainPage = () => {
  const {theme, /*isDarkMode, toggleTheme*/} = useContext(ThemeContext);

  return (
    <div 
      className={mainPageStyle.Page}
      style={{
        backgroundColor: theme.page.background
      }}>
      <Header>
        <ThemeButton />
      </Header>
      <Content />
      <Footer />
    </div>
  );
}

export default MainPage;