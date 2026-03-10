import Footer from "../widgets/LayoutFooter/Footer";
import Header from "../widgets/LayoutHeader/Header";
import PostList from "../widgets/PostList/PostList";
import "./../App.css";

function App() {
  return (
    <div>
      <Header />
      <PostList />
      <Footer />
    </div>
  );
}

export default App;
