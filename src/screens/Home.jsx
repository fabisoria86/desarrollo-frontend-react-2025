//import Logo from '../Components/Home/Logo.jsx';
//import GitHub from '../Components/Home/Github.jsx'

import OpenLink from "../Components/Core/OpenLink.jsx";

import Body from '../Components/Home/Body.jsx';
import Footer from '../Components/Home/Footer.jsx';

import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import githubLogo from '../assets/GitHub.svg';

const Home = () =>{
    return (
        <div>
           {/* <Logo />
            <GitHub />*/}
            <OpenLink redirectURL="https://vite.dev" logoImage={viteLogo} />
            <OpenLink redirectURL="https://react.dev" logoImage={reactLogo} />
            <OpenLink redirectURL="https://github.com/fabisoria86/desarrollo-frontend-react-2025" logoImage={githubLogo} />
            <Body />
            <Footer />
        </div>
    );
};

export default Home;