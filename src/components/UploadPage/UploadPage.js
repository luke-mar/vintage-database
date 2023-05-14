import './UploadPage.scss';

function UploadPage() {
  return (
    <>
        <div className='upload-items'>
            <div className='upload-photos'>
                <button className='upload-style'>Photo 1</button>  
                <button className='upload-style'>Photo 2</button>  
                <button className='upload-style'>Photo 3</button>  
                <button className='upload-style'>Photo 4</button>  
                <button className='upload-style'>Photo 5</button>
            </div>

            <input className='upload-style' name='product-title' placeholder='Product Name'></input>
            <input className='upload-style' name='product-description' placeholder='Product Descrption'></input>
            <input className='upload-style' name='product-price' placeholder='Product Price'></input>

            <button className='upload-style'>UPLOAD</button>  
        </div>    
    </>
  );
}

export default UploadPage;
