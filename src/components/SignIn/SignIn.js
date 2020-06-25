import React,{useState} from 'react'
import './SignIn.scss'
import logaSigninAndSignup from "../../assets/logoSigninAndSignup.png"
import { useHistory } from 'react-router'


const SignIn = () => {
    const history = useHistory();

    const [form, setForm] = useState([]);

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]:e.target.value 
        })
    };

    console.log(form)
    const submit = async () => {
        history.replace(`${process.env.PUBLIC_URL}/homePage`)
        const formData = new FormData();
        formData.append('email', form.email);
        formData.append('password', form.password);

            let postUser = await fetch ("http://freelancedeveloper.site/projects/laravel/hamilton/public/api/login", {
                method:"POST",
                // headers:{
                //     'Access-Control-Allow-Origin' :"*"
                // },
                body: formData,
            })
            let res = await postUser.json();
            console.log(res)
            
        }

    return (
        <section className="SignIn">
            <div className="SignIn-Cont">
                <div className="SignIn-Cont-TitleAnadSignUp">
                    <h1 className="SignIn-Cont-TitleAnadSignUp-Title">Hello, Friend!</h1>
                    <h4 className="SignIn-Cont-TitleAnadSignUp-Description">Enter your personal details and start journey with us</h4>
                    <button className="SignIn-Cont-TitleAnadSignUp-SignUp">Sign up</button>
                </div>
                <div className="SignIn-Cont-TitleAnadSignIn">
                    <img src={logaSigninAndSignup}/>
                    <h1 className="SignIn-Cont-TitleAnadSignIn-Title">Sign in to [App Name]</h1>
                    <h4 className="SignIn-Cont-TitleAnadSignIn-EmailAndPasswordAndForgot">Email:</h4>
                    <input 
                        className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS"
                        type="text"
                        id="email"
                        name="email"
                        onChange={handleChange}
                    />
                    <h4 className="SignIn-Cont-TitleAnadSignIn-EmailAndPasswordAndForgot">Password:</h4>
                    <input 
                        className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS" 
                        type="password"
                        id="password"
                        name = "password"
                        onChange={handleChange}
                    />
                    <h4 className="SignIn-Cont-TitleAnadSignIn-Forgot">Forgot your password?</h4>
                    <div className="SignIn-Cont-TitleAnadSignIn-SignInButton"><button className="SignIn-Cont-TitleAnadSignIn-SignIn" onClick = {submit}>Sign in</button></div>
                </div>
            </div>
        </section>
    )
}

export default SignIn