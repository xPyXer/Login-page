import React, { useState } from 'react';
import "./style.css"



const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit', { email, password });
    }

    return (
        <div id="login">
            <h1 className='title'> Login do sistema</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"  placeholder='Insira seu email' defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder='Insira sua senha' defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div> 
            </form>
        </div>
    );
};

 export default LoginPage;
 

 // Ao invés de utilizar value no component, substituir por defaultValue. Senão da erro e não é possível inserir os dados.
 // Nunca esquecer de chamar a constant. Igual no setEmail