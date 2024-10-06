import { useContext } from 'react';
import './style.css';
import { AuthContext } from '../context';
import { ContactComponent, FooterComponent, HeaderComponent } from '../../components/Login';

export const LoginPage = () => {
  const { login }: any = useContext(AuthContext)
    login('Flabio Hinestroza');
  /*const navigate = useNavigate();
  const handleLogin = () => {

    login('Flabio Hinestroza');
    navigate('/', {
      replace: true,
    })
  }*/

  return (
    <>
      <HeaderComponent />
      <div className="content">
        <div className="box">
          <img src="/src/assets/img/IMG-20240802-WA0082.jpg" alt="Image" />
        </div>
        <div className="box">
          <ContactComponent />
        </div>
      </div>
      <FooterComponent />
    </>
  )
}
