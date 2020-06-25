import React, {useState, useEffect} from 'react'
import './SignUp.scss'
import logaSigninAndSignup from "../../assets/logoSigninAndSignup.png"


const SignUp = () => {
    const [form, setForm] = useState([]);

    const handleChange = (e) => {
        setForm ({
            ...form,
            [e.target.name]:e.target.value 
        })
    };

    console.log(form)


    const submit = async () => {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('password', form.password);

            let postUser = await fetch ("http://freelancedeveloper.site/projects/laravel/hamilton/public/api/register", {
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
                    <h1 className="SignIn-Cont-TitleAnadSignUp-Title">Welcome Back!</h1>
                    <h4 className="SignIn-Cont-TitleAnadSignUp-Description">To keep connected with us, please login with your personal info</h4>
                    <button className="SignIn-Cont-TitleAnadSignUp-SignUp">Sign in</button>
                </div>
                <div className="SignIn-Cont-TitleAnadSignIn">
                    <img src={logaSigninAndSignup}/>
                    <h1 className="SignIn-Cont-TitleAnadSignIn-Title">Create Account</h1>
                    <h4 className="SignIn-Cont-TitleAnadSignIn-EmailAndPasswordAndForgot">Name:</h4>
                    <input 
                        className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS" 
                        type="text"
                        id= "name"
                        name="name"
                        onChange={handleChange}/>
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
                    <div className="SignIn-Cont-TitleAnadSignIn-SignInButton"><button className="SignIn-Cont-TitleAnadSignIn-SignIn" onClick ={ () => submit() } >Sign in</button></div>
                </div>
            </div>
        </section>
    )
}

export default SignUp