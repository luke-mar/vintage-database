import './StorePage.scss';
import { useNavigate } from 'react-router-dom';


function StorePage(props) {
  const navigate = useNavigate();
  function checkStore(product) {
    return product.store === 'store1';
  }

  return (
    <>
      <div className='all-prod-title'>ALL PRODUCTS FROM DRASTIC GRAPHICS:</div>
      {
        props.allProducts.filter(checkStore).map (product =>{
          return(
          <div className='card'>
              <img src={product.image1} className='photo' onClick={()=>{props.setNickname(product.nickname); navigate(`/item/${product.nickname}`);}}></img> 
              
              <div className='testborder'>
                <div className='name'>{product.name}</div> 
                <div className='name2'>{product.size}</div> 

              </div>
        
          </div>
          );
        })
      } 
    </>
  )
}

export default StorePage;
