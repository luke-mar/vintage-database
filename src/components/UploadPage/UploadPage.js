import './UploadPage.scss';

function UploadPage() {
  return (
    <>
        <div className='upload-items'>
            <div className='upload-photos'>
                <button>Photo 1</button>  
                <button>Photo 2</button>  
                <button>Photo 3</button>  
                <button>Photo 4</button>  
                <button>Photo 5</button>
            </div>

            <input name='product-title' placeholder='Product Name'></input>
            <input name='product-title' placeholder='Product Descrption'></input>
            <input name='product-title' placeholder='Product Price'></input>

            <button>UPLOAD</button>  
        </div>    
    </>
  );
}

export default UploadPage;
