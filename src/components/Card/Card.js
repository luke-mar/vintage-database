import './Card.scss';

function Card() {
  return (
    <>
      <div className='container'>
        <div className='card'>
          <div className='photo'></div> 
          <div className='name'>Item 1</div> 
        </div>
      </div>  

      <div className='container'>
        <div className='card'>
          <div className='photo'></div> 
          <div className='name'>Item 2</div> 
        </div>
      </div> 
    </>
  )
}

export default Card;
