import './Login.scss';

function Login(props) {

  return (
    <>
        <div className='upload-items'>
            <input className='upload-style bigwidth' name='user' placeholder='Username' onChange={(event)=>{props.setLoginUser(event.target.value)}} ></input>
            <input className='upload-style bigwidth' name='pw' placeholder='Password' onChange={(event)=>{props.setLoginPassword(event.target.value)}} ></input>
            <button className='upload-style' onClick={props.login}>LOGIN</button>
        </div>    
    </>
  );
}

export default Login;
