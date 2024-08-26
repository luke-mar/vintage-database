import './Header.scss';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <div className='owText' onClick={()=>{navigate('/')}}> database!! </div>
    </>
  )
}

export default Header;
