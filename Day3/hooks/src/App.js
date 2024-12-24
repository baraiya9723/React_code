import './App.css';
import { useCallback, useEffect, useRef, useState } from 'react'
function App() {
  const [passwored, setPasswored] = useState('')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [length,setLength] = useState(6)
  const passwordref = useRef(null)
  const genratePassword = useCallback(()=>{
    console.log("passworde genrating")
    let newpassword = ""
    let passwordrange = "abcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      passwordrange += "1234567890"
    }
    if(charAllowed){
      passwordrange += "!@#$%^&*()"
    }
    for(let i = 1; i<=length ; i++){
      newpassword += passwordrange[Math.floor(Math.random()*(passwordrange.length-1))]
    }
    setPasswored(newpassword)
  },[length,charAllowed,numberAllowed])
  const copyPassword = ()=>{
    let inputElement = passwordref.current;
    if(inputElement){
      navigator.clipboard.writeText(inputElement.value)
      .then(()=>{
        alert(inputElement.value)
      })
      .catch((err)=>{
        console.log("failed to copy text", err)
      })
    }
  }
useEffect(()=>{
  genratePassword()
},[length,charAllowed,numberAllowed])
  return (<div className="root">
    <div className="root">
      genrate passwored
    </div>
    <div>
      <input
        type='text'
        value={passwored}
        readOnly
        placeholder='password'
        min={6}
        max={100}
        ref={passwordref}
      ></input>
      <button style={{backgroundColor:'green',cursor:'pointer'}}
      onClick={copyPassword}
      > copy</button>
      <div>
        <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='charinput'
          onChange={() => setCharAllowed(pre => !pre)}>
        </input>
        <label htmlFor='charinput'> Character </label>
        <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberinput'
          onChange={() => setNumberAllowed(pre => !pre)}>
        </input>
        <label htmlFor='numberinput'>number</label>
      </div>
      <div>
        <input
        type='range'
        min={6}
        max={100}
        value={length}
        onChange={e=>setLength(e.target.value)}
        ></input>
        <label>Length:</label>
      </div>
    </div>
  </div>

  );
}

export default App;
