import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import BoxView from "./components/BoxView";
import PropsView from "./components/PropsView";
import CardPage from "./pages/Card";
import ProfilePage from "./pages/ProfilePage";
import Games from "./pages/Games";
import Projects from "./pages/Projects";
import Hackathon from "./pages/hacks/Hackathon";
import MainPage from "./pages/Home/MainPage";
import Blogs from "./pages/Blogs/Blogs";
import BlogAdd from "./pages/Blogs/BlogAdd";
import Calculator from "./pages/Calculator";
import Chats from "./pages/Chats";
import Wallpaper from "./pages/Wallpaper";
import ForumMain from "./pages/forum/ForumMain";

function App() {
  return (
    <div className="App">
      <div className="body-content">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/forum" element={<ForumMain />}></Route>
          <Route path="/add-blog" element={<BlogAdd />}></Route>
          <Route path="/card" element={<CardPage />}></Route>
          <Route path="/portfolio" element={<ProfilePage />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/boxes" element={<BoxView />}></Route>
          <Route path="/projects/pubg" element={<PropsView />}></Route>
          <Route path="/projects/calculator" element={<Calculator />}></Route>
          <Route path="/projects/wallpapers" element={<Wallpaper />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/chats" element={<Chats />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/hackathons" element={<Hackathon />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
