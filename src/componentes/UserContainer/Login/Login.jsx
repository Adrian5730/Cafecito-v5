import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <h1>LOGIN</h1>
            <div className="container-form-login">
                <form className='form-login' action="/login">
                    <ul>
                        <li>
                            <span style={{ "--i": "#a955ff", "--j": "#ea51ff" }}>
                                <FaGoogle />
                            </span>
                            <span className="titulo">Google</span>
                        </li>
                    </ul>
                    <input type="text" placeholder='Correo electrónico' />
                    <input type="password" placeholder='Contraseña' />
                    <label className='message'> No tenes cuenta?</label>
                    <button className='btn-register'><Link to={'/user/register'} className="link_to">Registrate</Link></button>
                </form>
            </div>
        </>
    )
}

export default Login