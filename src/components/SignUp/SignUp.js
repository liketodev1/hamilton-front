// import React from 'react'
// import './SignUp.scss'
// import logaSigninAndSignup from "../../assets/logoSigninAndSignup.png"
// const SignUp = () => {

//     return (
//         <section className="SignIn">
//             <div className="SignIn-Cont">
//                 <div className="SignIn-Cont-TitleAnadSignUp">
//                     <h1 className="SignIn-Cont-TitleAnadSignUp-Title">Welcome Back!</h1>
//                     <h4 className="SignIn-Cont-TitleAnadSignUp-Description">To keep connected with us, please login with your personal info</h4>
//                     <button className="SignIn-Cont-TitleAnadSignUp-SignUp">Sign in</button>
//                 </div>
//                 <div className="SignIn-Cont-TitleAnadSignIn">
//                     <img src={logaSigninAndSignup}/>
//                     <h1 className="SignIn-Cont-TitleAnadSignIn-Title">Create Account</h1>
//                     <h4 className="SignIn-Cont-TitleAnadSignIn-EmailAndPasswordAndForgot">Email:</h4>
//                     <input className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS"/>
//                     <h4 className="SignIn-Cont-TitleAnadSignIn-EmailAndPasswordAndForgot">Password:</h4>
//                     <input type="password"className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS" />
//                     <h4 className="SignIn-Cont-TitleAnadSignIn-Forgot">Forgot your password?</h4>
//                     <div className="SignIn-Cont-TitleAnadSignIn-SignInButton"><button className="SignIn-Cont-TitleAnadSignIn-SignIn">Sign up</button></div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default SignUp

import React from 'react'
import './SignUp.scss'
import logaSigninAndSignup from "../../assets/logoSigninAndSignup.png"

const SignUp = () => {

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
                    <input className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS"/>
                    <h4 className="SignIn-Cont-TitleAnadSignIn-EmailAndPasswordAndForgot">Email:</h4>
                    <input className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS"/>
                    <h4 className="SignIn-Cont-TitleAnadSignIn-EmailAndPasswordAndForgot">Password:</h4>
                    <input type="password"className ="SignIn-Cont-TitleAnadSignIn-EmmailAndPasswordInputS" />
                    <div className="SignIn-Cont-TitleAnadSignIn-SignInButton"><button className="SignIn-Cont-TitleAnadSignIn-SignIn">Sign in</button></div>
                </div>
            </div>
        </section>
    )
}

export default SignUp