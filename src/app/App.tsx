import ThemeSwitcher from "../features/ThemeSwitcher/ui/ThemeSwitcher";
import Header from "../widgets/LayoutHeader/Header";
import PostList from "../widgets/PostList/PostList";
import Footer from "../widgets/LayoutFooter/Footer";
import "./../App.css";

function App() {
  return (
    <>
      <ThemeSwitcher />
      <Header />
      <PostList />
      <Footer />
    </>
  );
}

export default App;
