import React,{useState} from 'react'
import './white.css';

const Whitepaper = () => {
    const [bgcolor, setbgcolor] = useState("white")
    return (
        <>
            <div>
                <div style={{color:'white',fontWeight:'bold',}}>
                    <h4>Whitepaper</h4>
                </div>
                <div style={{color:'white',fontWeight:'bold',}}>
                    <h2>Download Documentation</h2>
                </div>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',cursor:'pointer',}}>
                    <img className='h' src="/images/logo-top.png" alt="" style={{width:'20%'}}/>
                </div>
                <div style={{color:`${bgcolor}`,fontWeight:'bold',}}
                 onMouseEnter={() => {console.log("Event:MouseEnter");setbgcolor("yellow");}}
                   onMouseLeave={() => {console.log("Event:MouseLeave");setbgcolor("white")}}>
                    <h4>Download lightpaper</h4>  </div>
            </div>
        </>
    )
}

export default Whitepaper
