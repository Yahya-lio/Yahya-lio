import "./App.css";
import Auth from "./components/auth/Auth";
import IconsNav from "./components/iconsNavbar/IconsNav";
import AppHomepage from "./pages/AppHomepage";
import WelcomePage from "./pages/WelcomePage";


function App() {
  return (
    <div className='App'>
     {/* <WelcomePage /> */}
     {/* <Auth/> */}
     <AppHomepage />
    </div>
  );
}

export default App;
