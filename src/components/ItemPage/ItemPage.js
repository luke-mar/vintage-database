import './ItemPage.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { db } from '../../App';
function ItemPage(props) {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();  
  let productArray = props.allProducts;  
  const Param = useParams();   
  let nick = '';

  if(props.nickname === '')
  {
    nick = Param.id;
  }
  else
  {
    nick = props.nickname;
  }
  const currentIndex = productArray.findIndex(v => v.nickname === nick);
   
  if(props.allProducts.length > 0)
  {
  if(selected === 0)
  {
    return (
        <div className='item-all'>

            <div className='allphotos'>
                <div className='selected-container'> 
                    <img src={productArray[currentIndex].image1} className='selected-photo'></img>  
                </div> 

                <div className='photos'>
                    <img src={productArray[currentIndex].image1} className='next-photo0' onClick={()=>{setSelected(0)}}></img>
                    <img src={productArray[currentIndex].image2} className='next-photo1' onClick={()=>{setSelected(1)}}></img>
                    <img src={productArray[currentIndex].image3} className='next-photo2' onClick={()=>{setSelected(2)}}></img>
                    <img src={productArray[currentIndex].image4} className='next-photo3' onClick={()=>{setSelected(3)}}></img>
                    <img src={productArray[currentIndex].image5} className='next-photo4' onClick={()=>{setSelected(4)}}></img>
                </div>
            </div> 

            <div className='alltext'>
                <div className='text'>
                    <p className='product-title'>{productArray[currentIndex].name}</p>
                    <p className='product-description'>{productArray[currentIndex].description}</p>
                    <p className='product-size'>Size: {productArray[currentIndex].size}</p>
                    <p className='product-price'>$ {productArray[currentIndex].price}</p>
                </div>

                <div className={productArray[currentIndex].stock.toString() + 'f' + ' pay'}>
                    <PayPalScriptProvider>
                        <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                description: productArray[currentIndex].name, 
                                amount: {
                                    value: productArray[currentIndex].price,
                                },
                                },
                            ],
                            });
                        }}
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const name = details.payer.name.given_name;
                            props.updateStock(productArray[currentIndex].id);
                            props.testReload();
                            navigate('/');
                            alert("Transaction completed by " + name);
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

        </div>
    )
  }

    if(selected === 1)
    {
        return (
            <div className='item-all'>

            <div className='allphotos'>
                <div className='selected-container'> 
                    <img src={productArray[currentIndex].image2} className='selected-photo'></img>  
                </div> 

                <div className='photos'>
                    <img src={productArray[currentIndex].image1} className='next-photo0' onClick={()=>{setSelected(0)}}></img>
                    <img src={productArray[currentIndex].image2} className='next-photo1' onClick={()=>{setSelected(1)}}></img>
                    <img src={productArray[currentIndex].image3} className='next-photo2' onClick={()=>{setSelected(2)}}></img>
                    <img src={productArray[currentIndex].image4} className='next-photo3' onClick={()=>{setSelected(3)}}></img>
                    <img src={productArray[currentIndex].image5} className='next-photo4' onClick={()=>{setSelected(4)}}></img>
                </div>
            </div> 

            <div className='alltext'>
                <div className='text'>
                    <p className='product-title'>{productArray[currentIndex].name}</p>
                    <p className='product-description'>{productArray[currentIndex].description}</p>
                    <p className='product-size'>Size: {productArray[currentIndex].size}</p>
                    <p className='product-price'>$ {productArray[currentIndex].price}</p>
                </div>

                <div className={productArray[currentIndex].stock.toString() + 'f' + ' pay'}>
                    <PayPalScriptProvider>
                        <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: productArray[currentIndex].price,
                                },
                                },
                            ],
                            });
                        }}
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const name = details.payer.name.given_name;
                            props.updateStock(productArray[currentIndex].id);
                            props.testReload();
                            navigate('/');
                            alert("Transaction completed by " + name);
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

        </div>
        )
    }

    if(selected === 2)
    {
        return (
            <div className='item-all'>

            <div className='allphotos'>
                <div className='selected-container'> 
                    <img src={productArray[currentIndex].image3} className='selected-photo'></img>  
                </div> 

                <div className='photos'>
                    <img src={productArray[currentIndex].image1} className='next-photo0' onClick={()=>{setSelected(0)}}></img>
                    <img src={productArray[currentIndex].image2} className='next-photo1' onClick={()=>{setSelected(1)}}></img>
                    <img src={productArray[currentIndex].image3} className='next-photo2' onClick={()=>{setSelected(2)}}></img>
                    <img src={productArray[currentIndex].image4} className='next-photo3' onClick={()=>{setSelected(3)}}></img>
                    <img src={productArray[currentIndex].image5} className='next-photo4' onClick={()=>{setSelected(4)}}></img>
                </div>
            </div> 

            <div className='alltext'>
                <div className='text'>
                    <p className='product-title'>{productArray[currentIndex].name}</p>
                    <p className='product-description'>{productArray[currentIndex].description}</p>
                    <p className='product-size'>Size: {productArray[currentIndex].size}</p>
                    <p className='product-price'>$ {productArray[currentIndex].price}</p>
                </div>

                <div className={productArray[currentIndex].stock.toString() + 'f' + ' pay'}>
                    <PayPalScriptProvider>
                        <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: productArray[currentIndex].price,
                                },
                                },
                            ],
                            });
                        }}
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const name = details.payer.name.given_name;
                            props.updateStock(productArray[currentIndex].id);
                            props.testReload();
                            navigate('/');
                            alert("Transaction completed by " + name);
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

        </div>
        )
    }

    if(selected === 3)
    return (
        <div className='item-all'>

            <div className='allphotos'>
                <div className='selected-container'> 
                    <img src={productArray[currentIndex].image4} className='selected-photo'></img>  
                </div> 

                <div className='photos'>
                    <img src={productArray[currentIndex].image1} className='next-photo0' onClick={()=>{setSelected(0)}}></img>
                    <img src={productArray[currentIndex].image2} className='next-photo1' onClick={()=>{setSelected(1)}}></img>
                    <img src={productArray[currentIndex].image3} className='next-photo2' onClick={()=>{setSelected(2)}}></img>
                    <img src={productArray[currentIndex].image4} className='next-photo3' onClick={()=>{setSelected(3)}}></img>
                    <img src={productArray[currentIndex].image5} className='next-photo4' onClick={()=>{setSelected(4)}}></img>
                </div>
            </div> 

            <div className='alltext'>
                <div className='text'>
                    <p className='product-title'>{productArray[currentIndex].name}</p>
                    <p className='product-description'>{productArray[currentIndex].description}</p>
                    <p className='product-size'>Size: {productArray[currentIndex].size}</p>
                    <p className='product-price'>$ {productArray[currentIndex].price}</p>
                </div>

                <div className={productArray[currentIndex].stock.toString() + 'f' + ' pay'}>
                    <PayPalScriptProvider>
                        <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: productArray[currentIndex].price,
                                },
                                },
                            ],
                            });
                        }}
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const name = details.payer.name.given_name;
                            props.updateStock(productArray[currentIndex].id);
                            props.testReload();
                            navigate('/');
                            alert("Transaction completed by " + name);
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

        </div>
    )

    if(selected === 4)
    return (
        <div className='item-all'>

            <div className='allphotos'>
                <div className='selected-container'> 
                    <img src={productArray[currentIndex].image5} className='selected-photo'></img>  
                </div> 

                <div className='photos'>
                    <img src={productArray[currentIndex].image1} className='next-photo0' onClick={()=>{setSelected(0)}}></img>
                    <img src={productArray[currentIndex].image2} className='next-photo1' onClick={()=>{setSelected(1)}}></img>
                    <img src={productArray[currentIndex].image3} className='next-photo2' onClick={()=>{setSelected(2)}}></img>
                    <img src={productArray[currentIndex].image4} className='next-photo3' onClick={()=>{setSelected(3)}}></img>
                    <img src={productArray[currentIndex].image5} className='next-photo4' onClick={()=>{setSelected(4)}}></img>
                </div>
            </div> 

            <div className='alltext'>
                <div className='text'>
                    <p className='product-title'>{productArray[currentIndex].name}</p>
                    <p className='product-description'>{productArray[currentIndex].description}</p>
                    <p className='product-size'>Size: {productArray[currentIndex].size}</p>
                    <p className='product-price'>$ {productArray[currentIndex].price}</p>
                </div>

                <div className={productArray[currentIndex].stock.toString() + 'f' + ' pay'}>
                    <PayPalScriptProvider>
                        <PayPalButtons
                        createOrder={(data, actions) => {
                            return actions.order.create({
                            purchase_units: [
                                {
                                amount: {
                                    value: productArray[currentIndex].price,
                                },
                                },
                            ],
                            });
                        }}
                        onApprove={async (data, actions) => {
                            const details = await actions.order.capture();
                            const name = details.payer.name.given_name;
                            props.updateStock(productArray[currentIndex].id);
                            props.testReload();
                            navigate('/');
                            alert("Transaction completed by " + name);
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

        </div>
    )
  }    

}

export default ItemPage;
