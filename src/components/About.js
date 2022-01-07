import React from 'react'


export const About = () => {
    return (
        <>
            <div style={{display:'flex',
            flexDirection:'row', alignItems:'center',}}>
                <div style={{display:'flex',justifyContent:'center',  width:'50%',}}>
                    <img src='/images/svg-1.svg' alt="" style={{width:'59%',}}/>
                </div>
            
                <div style={{width:'30%', paddingTop:'20px',}}>
                        <div style={{display:'flex',justifyContent:'flex-start',marginLeft:'5px',}}  >
                            <h1>About Project</h1>
                        </div>
                        <div style={{display:'flex',justifyContent:'left',paddingTop:'0px',}}>
                            <p style={{textAlign:'justify',}}>
                                We have you covered no matter where you are located.
                                All you neeed a active internet connection and a phone or computer.
                            </p>
                        </div>
                    <div>
                        <h1 style={{display:'flex',justifyContent:'left',}}>Character</h1>
                        <p style={{textAlign:'justify',}}>
                            We have you covered no matter where you are located.
                            All you neeed a active internet connection and a phone or computer.
                        </p>
                    </div>
                </div>
           </div>
           <div>
               <h1 style={{display:'flex',justifyContent:'Center', paddingTop:'50px',}}>Our Services</h1>
           </div>
           <div  style={{display:'flex',
                flexDirection:'row',justifyContent:'center',}}>
                    <div style={{width:'40%'}}>
                         <img src='/images/n4.png' alt="" style={{width:'50%',}}/>
                   <div>
                        <span>Reduce Expenses</span>
                   </div>
                   <div>
                        <p style={{textAlign:'center',}}>We help reduce your fees and increase
                        overall revenue</p>
                   </div>
               </div>
               <div style={{width:'40%'}}>
                    <div>
                        <img src='/images/n4.png' alt="" style={{width:'50%',}}/>
                   </div>
                   <div>
                        <span>Virtual Ofices</span>
                   </div>
                   <div>
                        <p style={{textAlign:'center',}}>
                        You can access our platform online from 
                        anywhere in the world</p>
                   </div>
               </div>
               <div style={{width:'40%'}}>
                    <div>
                        <img src='/images/n4.png' alt="" style={{width:'50%',}}/>
                   </div>
                   <div>
                        <span>Premium Benefits</span>
                   </div>
                   <div>
                        <p style={{textAlign:'center',}}>
                        You can access our platform 
                        online from anywhere 
                        in the world</p>
                   </div>
               </div>
           </div>

        </>
    )
}