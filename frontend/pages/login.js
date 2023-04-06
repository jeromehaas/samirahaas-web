import BlankPage from "components/04-layouts/blank-page/blank-page";
import LoginForm from "components/03-organisms/login-form/login-form";

const Login = () => {

    return (
        <BlankPage meta={{ title: 'Login', description: '' }}>
            <LoginForm />
        </BlankPage>
    );

};

export default Login;