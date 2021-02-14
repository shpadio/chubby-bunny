import React, {useState} from 'react';

function SignUp(props) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const signupHandler = (event) => {
        event.preventDefault()
        fetch('http://localhost:4000/auth/signup',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({name,email,password})
        }).then(res => res.json())
            .then(user => console.log(user))
    }


    return (
        <div>
            <form onSubmit={signupHandler} >
                <input onChange={(event) => setName(event.target.value)}/>
                <input onChange={(event) => setEmail(event.target.value)} />
                <input onChange={(event => setPassword(event.target.value))}/>
                <button>Войти</button>
            </form>
        </div>
    );
}

export default SignUp;