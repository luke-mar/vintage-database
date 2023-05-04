import './Card.scss';
import { useNavigate } from 'react-router-dom';

function Card() {
  const navigate = useNavigate();

  return (
    <>
      <div className='container'>
        <div className='card'>
          <div className='photo' onClick={()=>{navigate('/item')}}></div> 
          <div className='name'>Item 1</div> 
        </div>
      </div>  

      <div className='container'>
        <div className='card'>
          <div className='photo' onClick={()=>{navigate('/item')}}></div> 
          <div className='name'>Item 2</div> 
        </div>
      </div> 
    </>
  )
}

export default Card;
