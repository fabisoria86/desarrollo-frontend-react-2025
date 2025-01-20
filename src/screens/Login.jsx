// import FormLogin from '../Components/Forms/FormLogin.jsx';
// import FormLoginWithHook from '../Components/Forms/FormLoginWithHook.jsx';
import FormWithMotionAndHook from '../Components/Forms/FormLoginWithMotion.jsx';

const Login = () => {
    return(
        <>
            {/*<FormLogin titleForm="WELCOME TO FULLSTACK PROGRAM" />
            <FormLoginWithHook titleForm="WELCOME TO FULLSTACK PROGRAM USE HOOKS" />*/}
            <FormWithMotionAndHook titleForm="WELCOME TO FULLSTACK PROGRAM USE MOTION" />
        </>
    );
};

export default Login;