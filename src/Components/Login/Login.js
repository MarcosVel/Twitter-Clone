import './Login.css';
import { AiOutlineTwitter } from "react-icons/ai";
import { Button } from '@material-ui/core';
import { auth, provider } from '../../firebase';

function Login() {

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(results => {
        console.log(results)
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login_sections">
        <section className="login_logoSide">
          <AiOutlineTwitter size='450' />
        </section>
        <section className="login_loginSide">
          <div className="login_form">
            <AiOutlineTwitter size='52' className='login__logoIcon' />
            <h1>Acontecendo agora</h1>
            <h2>Inscreva-se no Twitter hoje mesmo.</h2>
            <div className="login_buttons">
              <Button
                type='submit'
                variant='outlined'
                onClick={ signIn }
                className='login_btn btn_entrar'
              >Entrar</Button>
              <a href="https://www.linkedin.com/in/marcosveloso99/" target="_blank" rel="noopener noreferrer" title="Marcos Veloso - LinkedIn">
                <Button variant='outlined' className='login_btn btn_dev'>Desenvolvedor</Button>
              </a>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <p>Clone do Twitter · 2021</p>
      </footer>
    </div>
  )
}

export default Login;
