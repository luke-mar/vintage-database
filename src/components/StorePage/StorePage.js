import './StorePage.scss';
import { useNavigate } from 'react-router-dom';


function StorePage(props) {
  const navigate = useNavigate();
  function checkStore(product) {
    return product.store === 'store1';
  }

  return (
    <>
      {
        props.allProducts.filter(checkStore).map (product =>{
          return(
            <div className='container'>
              <div className='card'>
                <img src={product.image1} className='photo' onClick={()=>{props.setNickname(product.nickname); navigate(`/item/${product.nickname}`);}}></img> 
                <div className='row'>
                    <div className='name'>{product.name}</div> 
                    <div className='name'>{product.size}</div> 
                  </div>
              </div>
            </div> 
          );
        })
      } 
    </>
  )
}

export default StorePage;
