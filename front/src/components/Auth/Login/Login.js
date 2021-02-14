import React, {useState} from 'react';

function Login(props) {
    const [email,setEmail] = useState({})
    const [password,setPassword] = useState({})


    const loginHandler = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/auth/login',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({email,password})
        }).then(res => res.json())
            .then(user => console.log(user))
    }


    return (


        <div style={{maxWidth:"20%",margin:"auto"}}>
            <form onSubmit={loginHandler} style={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                <input placeholder="Email" onChange={(event) => setEmail(event.target.value)} name="email"/>
                <input placeholder="Password" type="password" onChange={(event) => setPassword(event.target.value)} name="password"/>
                <button>Войти</button>
            </form>
        </div>
    );
}

export default Login;