import './Login.css';
import { AiOutlineTwitter } from "react-icons/ai";
import { Button } from '@material-ui/core';

function Login() {
  return (
    <div className="login">
      <section className="login_logoSide">
        <AiOutlineTwitter size='450' />
      </section>
      <section className="login_loginSide">
        <div className="login_form">
          <AiOutlineTwitter size='52' className='login__logoIcon' />
          <h1>Acontecendo agora</h1>
          <h2>Inscreva-se no Twitter hoje mesmo.</h2>
          <Button variant='outlined' className='login_btn btn_entrar'>Entrar</Button>
          <a href="https://www.linkedin.com/in/marcosveloso99/" target="_blank" rel="noopener noreferrer" title="Marcos Veloso - LinkedIn">
            <Button variant='outlined' className='login_btn btn_dev'>Desenvolvedor</Button>

          </a>
        </div>
      </section>
    </div>
  )
}

export default Login;
