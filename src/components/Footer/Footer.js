import './Footer.scss';
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();  
  return (
    <>
        <div className='footer'>
            <div className='footer-upload' onClick={()=>{navigate('upload')}}>UPLOAD</div>
        </div>    
    </>
  );
}

export default Footer;
