import { useState } from "react";

const FormLogin = ({titleForm}) =>{

    const [formData, setFormData] = useState({
        username:'',
        email:''
    });
    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('datos del Formulario', formData);
    };

    const handleChange = (event) =>{
        // debugger; // esto hace que pare ahi y se pueda debuggear el codigo
        //console.log(event); // imprime la variable
        const {name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <div>
                    <label>
                        Username:
                        <input 
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Email:
                        <input 
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>

                <button type="submit">Enviar</button>
            </form>
        </>
    );
};

export default FormLogin;