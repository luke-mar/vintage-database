import './ItemPage.scss';
import { useState } from 'react';

function ItemPage() {
  const [selected, setSelected] = useState(0);  

  if(selected === 0)
  {
    return (
        <>
            <div className='container'> 
                <div className='next-photo0 selected-photo'></div>  
            </div> 

            <div className='photos'>
                <div className='next-photo0' onClick={()=>{setSelected(0)}}></div>
                <div className='next-photo1' onClick={()=>{setSelected(1)}}></div>
                <div className='next-photo2' onClick={()=>{setSelected(2)}}></div>
                <div className='next-photo3' onClick={()=>{setSelected(3)}}></div>
                <div className='next-photo4' onClick={()=>{setSelected(4)}}></div>
            </div> 

            <div className='text'>
                <p>ITEM TITLE size</p>
                <p>DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
                <p>PRICE</p>
            </div>
        </>
    )
  }

    if(selected === 1)
    {
        return (
            <>
                <div className='container'> 
                    <div className='next-photo1 selected-photo'></div>
                </div> 

                <div className='photos'>
                    <div className='next-photo0' onClick={()=>{setSelected(0)}}></div>
                    <div className='next-photo1' onClick={()=>{setSelected(1)}}></div>
                    <div className='next-photo2' onClick={()=>{setSelected(2)}}></div>
                    <div className='next-photo3' onClick={()=>{setSelected(3)}}></div>
                    <div className='next-photo4' onClick={()=>{setSelected(4)}}></div>
                </div> 

                <div className='text'>
                    <p>ITEM TITLE size</p>
                    <p>DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
                    <p>PRICE</p>
                </div>
            </>
        )
    }

    if(selected === 2)
    {
        return (
            <>
                <div className='container'> 
                    <div className='next-photo2 selected-photo'></div> 
                </div> 

                <div className='photos'>
                    <div className='next-photo0' onClick={()=>{setSelected(0)}}></div>
                    <div className='next-photo1' onClick={()=>{setSelected(1)}}></div>
                    <div className='next-photo2' onClick={()=>{setSelected(2)}}></div>
                    <div className='next-photo3' onClick={()=>{setSelected(3)}}></div>
                    <div className='next-photo4' onClick={()=>{setSelected(4)}}></div>
                </div> 

                <div className='text'>
                    <p>ITEM TITLE size</p>
                    <p>DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
                    <p>PRICE</p>
                </div>
            </>
        )
    }

    if(selected === 3)
    return (
        <>
            <div className='container'> 
                <div className='next-photo3 selected-photo'></div>  
            </div> 

            <div className='photos'>
                <div className='next-photo0' onClick={()=>{setSelected(0)}}></div>
                <div className='next-photo1' onClick={()=>{setSelected(1)}}></div>
                <div className='next-photo2' onClick={()=>{setSelected(2)}}></div>
                <div className='next-photo3' onClick={()=>{setSelected(3)}}></div>
                <div className='next-photo4' onClick={()=>{setSelected(4)}}></div>
            </div> 

            <div className='text'>
                <p>ITEM TITLE size</p>
                <p>DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
                <p>PRICE</p>
            </div>
        </>
    )

    if(selected === 4)
    return (
        <>
            <div className='container'> 
                <div className='next-photo4 selected-photo'></div>  
            </div> 

            <div className='photos'>
                <div className='next-photo0' onClick={()=>{setSelected(0)}}></div>
                <div className='next-photo1' onClick={()=>{setSelected(1)}}></div>
                <div className='next-photo2' onClick={()=>{setSelected(2)}}></div>
                <div className='next-photo3' onClick={()=>{setSelected(3)}}></div>
                <div className='next-photo4' onClick={()=>{setSelected(4)}}></div>
            </div> 

            <div className='text'>
                <p className='product-title'>ITEM TITLE size</p>
                <p className='product-description'>DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION DESCRIPTION</p>
                <p className='product-price'>PRICE</p>
            </div>
        </>
    )    

}

export default ItemPage;
