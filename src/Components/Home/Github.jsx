import githubLogo from '../../assets/GitHub.svg';

const Logo = () => {
    return (
        <div>
           <div>
                <a href="https://github.com/fabisoria86/desarrollo-frontend-react-2025" target="_blank">
                <img src={githubLogo} className="logo GitHub" alt="GitHub logo" />
                </a>
            </div>
        </div>
    );
};

export default Logo;