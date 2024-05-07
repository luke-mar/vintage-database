import './Footer.scss';
import { useNavigate } from 'react-router-dom';


function Footer(props) {

  const navigate = useNavigate();  
  return (
    <>
        <div className='footer'>
            {/* <div className='footer-upload' onClick={()=>{navigate('upload')}}>UPLOAD</div> */}
            <div className='footer-logout' onClick={()=>{}}>LOGOUT</div>
        </div>    
    </>
  );

}

export default Footer;
