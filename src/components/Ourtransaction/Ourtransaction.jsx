import React,{useState} from 'react'

const Ourtransaction = () => {
    const [bgcolor,setbgcolor]=useState("#A020F0");
    const [bgcolor1,setbgcolor1]=useState("#A020F0");
    const [bgcolor2,setbgcolor2]=useState("#A020F0");
    return (
        <>
            
           <div>
               <h1 style={{display:'flex',justifyContent:'Center',color:'white', paddingTop:'50px',fontWeight:'bold'}}>Our Transactions</h1>
           </div>
           <div  style={{display:'flex',flexDirection:'row',justifyContent:'center', paddingBottom:'60px',}}>
                    <div style={{width:'20%', height:'10%', border:'none',backgroundColor:`${bgcolor1}`, cursor:'pointer',}}
                    onMouseEnter={() => {console.log("Event:MouseEnter");setbgcolor1("blue");}}
                   onMouseLeave={() => {console.log("Event:MouseLeave");setbgcolor1("#A020F0")}}>
                        <div style={{padding:'10px',}}>
                         <img src='images/svg-1.svg' alt="" style={{width:'72%',}}/>
                        </div>
                        <div style={{color:'white',}}>
                                <h3 style={{fontWeight:'bold',}}>Reduce Expenses</h3>
                                <p style={{textAlign:'center',color:'white',}}>
                                We help reduce your fees and increase
                                overall revenue</p>
                        </div>
                 </div>
               <div style={{width:'20%',height:'20%', border:'none',backgroundColor:`${bgcolor2}`,marginLeft:'10px',
                    cursor:'pointer',}}
                    onMouseEnter={() => {console.log("Event:MouseEnter");setbgcolor2("blue");}}
                    onMouseLeave={() => {console.log("Event:MouseLeave");setbgcolor2("#A020F0")}}>
                        <div style={{padding:'10px', justifyItems:'center',}}>
                        <img src='/images/svg-3.svg' alt="" style={{width:'80%',}}/>
                        </div>
                   <div>
                        <h3 style={{color:'white',fontWeight:'bold',}}>Virtual Ofices</h3>
                        <p style={{textAlign:'center', color:'white',}}>
                        You can access our platform online from 
                        anywhere in the world</p>
                   </div>
               </div>
               <div style={{width:'20%' ,height:'10%',border:'none',backgroundColor:`${bgcolor}`,marginLeft:'10px',}}
                    onMouseEnter={() => {console.log("Event:MouseEnter");setbgcolor("blue");}}
                    onMouseLeave={() => {console.log("Event:MouseLeave");setbgcolor("#A020F0")}}>
                    <div style={{padding:'10px',}}>
                        <img src='/images/svg-5.svg' alt="" style={{width:'70%',}}/>
                   </div>
                   <div>
                        <h3 style={{color:'white', fontWeight:'bold',}}>Premium Benefits</h3>
                        <p style={{textAlign:'center', color:'white',}}>
                       Unlock our special benefit card
                       that return 5% cashback</p>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Ourtransaction
