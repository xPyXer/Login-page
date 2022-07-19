import React, { useState } from 'react';
import "./style.css"



const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submit');
    }

    return (
        <div id="login">
            <h1 className='title'> Login do sistema</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(event) => (event.target.value)} placeholder='Insira seu email'/>
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" value={password} onChange={(event) => (event.target.value)} placeholder='Insira sua senha'/>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
};

 export default LoginPage;
 