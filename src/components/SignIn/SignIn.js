import React from 'react'
import './SignIn.scss'
import logaSigninAndSignup from "../../assets/logoSigninAndSignup.png"

const SignIn = () => {

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
                    <input className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS"/>
                    <h4 className="SignIn-Cont-TitleAnadSignIn-EmailAndPasswordAndForgot">Password:</h4>
                    <input type="password"className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS" />
                    <h4 className="SignIn-Cont-TitleAnadSignIn-Forgot">Forgot your password?</h4>
                    <div className="SignIn-Cont-TitleAnadSignIn-SignInButton"><button className="SignIn-Cont-TitleAnadSignIn-SignIn">Sign in</button></div>
                </div>
            </div>
        </section>
    )
}

export default SignIn