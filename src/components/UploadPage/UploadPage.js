import './UploadPage.scss';

function UploadPage() {

  // try {
  //   const docRef = await addDoc(collection(db, "products"), {
  //     "name": "90s Wizard Sweatshirt",
  //     "nickname": "product-26",
  //     "size": "M/L",
  //     "image1": "https://imgur.com/4Mt21qC.jpg",
  //     "image2": "https://imgur.com/y1IhIrm.jpg",
  //     "image3": "",
  //     "image4": "",
  //     "image5": "",
  //     "description": "Wizard Print on 90s Sweatshirt. Tagged Medium, M/L Fit",
  //     "store": "store3",
  //     "price": 45,
  //     "stock": true,
  //     "quantity": 1,
  //     "measurements": ""
  //   });
  //   console.log("Document written with ID: ", docRef.id);
  // } catch (e) {
  //   console.error("Error adding document: ", e);
  // }

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
