import './StoreList.scss';
import { useNavigate } from 'react-router-dom';

function StoreList(props) {
  const navigate = useNavigate();
  return (
    <>
        {/* <div className="navbar bg-base-100 colorchange">
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                <a>
                  Stores
                  <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </a>
                <ul className="p-2 bg-base-100">
                  <li><div onClick={()=>{navigate(`/store1`)}} className='store'>Drastic Graphics</div></li>
                  <li><div onClick={()=>{navigate(`/store2`)}} className='store'>Dr. Levi's</div></li>
                  <li><div onClick={()=>{navigate(`/store3`)}} className='store'>Wonder Why</div></li>
                  <li><div onClick={()=>{navigate(`/store4`)}} className='store'>Fiction Supply</div></li>
                </ul>
              </li>
            </ul>
          </div>
        </div> */}
        <div className='stores'>
            <div onClick={()=>{navigate(`/store1`)}} className='store'>Drastic Graphics</div>
            <div onClick={()=>{navigate(`/store2`)}} className='store'>Dr. Levi's</div>
            <div onClick={()=>{navigate(`/store3`)}} className='store'>Wonder Why</div>
            <div onClick={()=>{navigate(`/store4`)}} className='store'>Fiction Supply</div>
        </div>
    </>
  );
}

export default StoreList;
