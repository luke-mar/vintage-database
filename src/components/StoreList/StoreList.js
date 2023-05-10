import './StoreList.scss';
import { useNavigate } from 'react-router-dom';

function StoreList(props) {
  const navigate = useNavigate();
  return (
    <>
        <div className='stores'>
            <div onClick={()=>{navigate(`/store1`)}} className='store'>Store 1</div>
            <div onClick={()=>{navigate(`/store2`)}} className='store'>Store 2</div>
            <div onClick={()=>{navigate(`/store3`)}} className='store'>Store 3</div>
            <div onClick={()=>{navigate(`/store4`)}} className='store'>Store 4</div>
        </div>
    </>
  );
}

export default StoreList;
