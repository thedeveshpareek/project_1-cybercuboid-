import React,{useState} from 'react'



const About = () => {
    const [bgcolor,setbgcolor]=useState("#A020F0");
    const [bgcolor1,setbgcolor1]=useState("#A020F0");
    const [bgcolor2,setbgcolor2]=useState("#A020F0");

    return (
        <>
            <div style={{display:'flex',
            flexDirection:'row', alignItems:'center',}}>
                <div style={{display:'flex',justifyContent:'center',  width:'50%',}}>
                    <img src='/images/svg-1.svg' alt="" style={{width:'59%',}}/>
                </div>
            
                <div style={{width:'30%', paddingTop:'20px',}}>
                        <div style={{display:'flex',justifyContent:'flex-start',marginLeft:'5px', color:'white',fontWeight:'normal',}}  >
                            <h1>About Project</h1>
                        </div>
                        <div style={{display:'flex',justifyContent:'left',paddingTop:'0px',}}>
                            <p style={{textAlign:'justify',color:'white', fontWeight:'normal',}}>
                                We have you covered no matter where you are located.
                                All you neeed a active internet connection and a phone or computer.
                            </p>
                        </div>
                    <div>
                        <h1 style={{display:'flex',justifyContent:'left', color:'white',fontWeight:'normal',}}>Character</h1>
                        <p style={{textAlign:'justify',color:'white',fontWeight:'normal',}}>
                            We have you covered no matter where you are located.
                            All you neeed a active internet connection and a phone or computer.
                        </p>
                    </div>
                </div>
           </div>
           <div>
               <h1 style={{display:'flex',justifyContent:'Center',color:'white', paddingTop:'50px',fontWeight:'bold'}}>Our Services</h1>
           </div>
           <div  style={{display:'flex',flexDirection:'row',justifyContent:'center',}}>
                    <div style={{width:'20%', height:'10%', border:'none',backgroundColor:`${bgcolor1}`, cursor:'pointer',}}
                    onMouseEnter={() => {console.log("Event:MouseEnter");setbgcolor1("blue");}}
                   onMouseLeave={() => {console.log("Event:MouseLeave");setbgcolor1("#A020F0")}}>
                        <div style={{padding:'10px',}}>
                         <img src='/images/n4.png' alt="" style={{width:'40%',}}/>
                        </div>
                        <div style={{color:'white',}}>
                                <h3 style={{fontWeight:'bold',}}>Reduce Expenses</h3>
                                <p style={{textAlign:'center',color:'white',}}>
                                We help reduce your fees and increase
                                overall revenue</p>
                        </div>
                 </div>
               <div style={{width:'20%',height:'10%', border:'none',backgroundColor:`${bgcolor2}`,marginLeft:'10px',
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

export default About;