import './Card.scss';
import { useNavigate } from 'react-router-dom';


function Card(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className='all-prod-title'>ALL PRODUCTS:</div>
      {
        props.allProducts.map (product =>{
          return(
              <div className='card'>
                <img src={product.image1} className='photo' onClick={()=>{props.setNickname(product.nickname); navigate(`/item/${product.nickname}`);}}></img> 
                
                <div className='testborder'>
                  <div className='name'>{product.name}</div> 
                  <div className={product.stock.toString() + 'j' + ' name2'}>{product.size}</div> 
                  <div className={product.stock.toString() + 'h'}>OUT OF STOCK</div>
                </div>
                
              </div>

          );
        })
      } 
    </>
  )
}

export default Card;
