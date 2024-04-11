import React from 'react';
import Head from 'next/head';

const Login = () => {
    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <body style={{ backgroundImage: "url('https://5.imimg.com/data5/SELLER/Default/2023/5/309688873/VV/II/TU/8675179/online-exam-software.jpg')" }}>
                <div className="register-box">

                    <form className='flex flex-col gap-4 justify-center items-center'>
                    <h1>Welcome Learners!!</h1>
                    <h4>Enter your Credentials to login</h4>
                       
                        <label htmlFor="username"><strong>Username</strong></label>
                        <input type="text" id="username" name="username" placeholder="Enter your username" required />
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" id="password" name="password" placeholder="Enter your password" required />
                        <button className="submit-button" type="submit">LOGIN</button>

                        <a href="fp.html"><strong>Forgot Password?</strong></a>
                    </form>
                </div>
            </body>
        </div>
    );
}

export default Login;
