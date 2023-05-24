import React from 'react';
import "./Messages.css";
import { useState } from 'react';

const Messages=()=>{

    const primary=[
        {
            image:'ola.jpg',
            name:"Omolola Jackson",
            message:"Hey!"
        },
        {
            image:'olami.jpg',
            name:"Johnson Juliet",
            message:"Ok"
        },
        {
            image:'ola.jpg',
            name:"Jane Fortune",
            message:"On my way home bro"
        },
        {
            image:'snow.jpg',
            name:"Dane Lord",
            message:"I have not seen it"
        },
        {
            image:'adventure.jpeg',
            name:"Omolola Jackson",
            message:"Hey!"
        },
    ];

    const Btn =()=>{
       let id = {}
        for(let i=1; i<3;i++){
            id[i] = false
            id[1]=true
        }
        return id
    };

    const [request, setrequest]=useState(Btn);

    const Request= (id)=>{
        for(let i = 1; i<3; i++){
            setrequest({[i]:false,[id]:true})
        }
      
    };



    return(
        <div className='messages-container' id="container">
        <div className='messages'>
            <div className='messages-head'>
               <b>  Messages </b>
               <i className='bx bx-edit'></i>
            </div>
            <div className='messages-search'>
            <i className='bx bx-search'></i>
                <input type="text" />
            </div>
            <div className='message-type'>
                 <p className={request[1] ? "active":""} onClick={()=>Request(1)}> Primary</p>
                 <p className={request[2] ? "active":""} onClick={()=>Request(2)}>General</p> 
                 <p className={request[3] ? "active":""} onClick={()=>Request(3)}> Request</p>
            </div>
            
                {primary.map(pri=>
                <div className='primary-layer'>
                    <div className='profile-pics'>
                        <img src={pri.image} alt="" />
                    </div>
                    <span className='primary-comment'>
                        <b>{pri.name}</b>
                        <p className='text-muted'>{pri.message}</p>
                    </span>
                </div>
                    )}
     
        </div>
        <span> Requests  </span>
        <div className='request-container'>
        <div className='request-layer'>
            <div className='profile-pics'>
                <img src="ola.jpg" alt="" />
             </div>
            <span>
                <b>lmsdls</b>
                <p className='text-muted'>lsmdks</p>
             </span>
        </div>
        <div className='request-btn'>
            <div className='btn'>
                Accept
            </div>
            <div className='btn'>
               Decline
            </div>
        </div>
        </div>
        <div className='request-container'>
        <div className='request-layer'>
            <div className='profile-pics'>
                <img src="ola.jpg" alt="" />
             </div>
            <span>
                <b>lmsdls</b>
                <p className='text-muted'>lsmdks</p>
             </span>
        </div>
        <div className='request-btn'>
            <div className='btn'>
                Accept
            </div>
            <div className='btn'>
                Decline
            </div>
        </div>
        </div>
        <div className='request-container'>
        <div className='request-layer'>
            <div className='profile-pics'>
                <img src="ola.jpg" alt="" />
             </div>
            <span>
                <b>lmsdls</b>
                <p className='text-muted'>lsmdks</p>
             </span>
        </div>
        <div className='request-btn'>
            <div className='btn'>
                Accept
            </div>
            <div className='btn'>
                Decline
            </div>
        </div>
        </div>
    
    </div>
    )
}

export default Messages