import './Login.css';
import { AiOutlineTwitter } from "react-icons/ai";

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
        </div>
      </section>
    </div>
  )
}

export default Login;
