import React,{useState} from 'react'
import './white.css';

const Whitepaper = () => {
    const [Color, setColor] = useState("white");
    return (
        <>
        <section style={{
            paddingTop:'90px',paddingBottom:'110px',
        }} id='whitepaper'>
            <div>
                <div style={{color:'white',fontWeight:'bold',}}>
                    <h4>Whitepaper</h4>
                </div>
                <div style={{color:'white',fontWeight:'bold',}}>
                    <h2>Download Documentation</h2>
                </div>
                <div  style={{display:'flex',flexDirection:'row',justifyContent:'center',cursor:'pointer',}}>
                    <img className='h' src="/images/logo-top.png" alt="" style={{width:'30%'}}/>
                </div>
                <div style={{color:`${Color}`,fontWeight:'bold',}}
                 onMouseEnter={() => {setColor("yellow");}}
                   onMouseLeave={() => {setColor("white");}}>
                    <h4>Download lightpaper</h4>  </div>
            </div>
            </section>
        </>
    )
}

export default Whitepaper
