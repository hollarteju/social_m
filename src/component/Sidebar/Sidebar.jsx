import React from 'react';
import { SIDEBAR } from "./Sidebar_menu";
import "./Sidebar.css";
import { useState } from "react";
import { useEffect } from 'react';

const Sidebar =()=>{

const [notice, setnotice]=useState(true)
const notificationNotice=(id)=>{
    if(id === 3){
        return true};

  
};




const MenuList=()=>{
    let id = {};
    for(let i =0; i < SIDEBAR.length; i++){
        id[i]= false;
        id[1]=true;
    };

    return id;
};


const [items, setitems]=useState(MenuList);

const menuClass =(id)=>{
    for(let i=0;i<SIDEBAR.length;i++){
        setitems(({[i]:false,[id]:true}));
    };

    if(id ===3){
        console.log()
       setnotice(false)
    };
   
};

const menu =()=>{
    let active ='sidebar active';
    if(items[1]){
        active +=" " + "active-first";
    };
    if(items[8]){
        active +=" " + "active-last"
    };
    return active
};

const popMsg = items[3];
const item = items;




const icons =(icon)=>{
    let icons = [icon] + " " + "active";
    
    return icons;

};

useEffect(()=>{
   icons();
},[]);

const [btn, setbtn] =useState(false);
function menubtn(){
    setbtn(true)
};

window.addEventListener("scroll",
()=>{
    if(window.scrollY){
        setbtn(false);
        item[3]=false
    };
   
});





   

    return(
        <div className='sidebar-container'>
            <div>
            <a>
            <div className='user-profile'>
                <div className='profile-pics'>
                    <img src="ola.jpg" alt="" />
                </div>
                <div className='user-handle'>
                    <h4>Hollarteju</h4>
                    <p className='text-muted'>@hollartej_u</p>
               
                </div>
            </div>
            </a>
            <div className={btn?"sidebar-layer ":"sidebar-layer activ"}>
                {SIDEBAR.map((side)=> 
                <a>
                <div className= {item[side.id]?menu():"sidebar"} onClick={()=>menuClass(side.id)}>
                    <i className={item[side.id]? icons(side.icon):(side.icon)}>{notificationNotice(side.id)?(<span className={notice?"#span":"span-deactivate"} id='span'>{side.notice}</span>):""}</i>
                    <h3>{side.name}</h3>
                </div>
                </a>)}
            </div>
            <label For="create-post" className='btn btn-primary'> Create Post</label> 
            <i className={btn?"activate":' mobile-tiggle-button bx bxs-chevron-left-circle'} id="mobileBtn" onClick={menubtn}></i>
            </div>
            <div className={popMsg?'notification-pop active':"notification-pop"}>
                <div className='notification-info-container'>
                    <div className='notification-info'>
                        <div className='profile-pics'>
                            <img src="usain.jpg" alt="" />
                        </div>
                        <div className='notification'>
                            <div>
                            <b>Mariam Peter</b>
                            accepted your friend request
                            </div>
                            <small className='text-muted'>2 DAYS AGO</small>
                        </div>
                    </div>
                </div>
                <div className='notification-info-container'>
                    <div className='notification-info'>
                        <div className='profile-pics'>
                        <img src="usain.jpg" />
                        </div>
                        <div className='notification'>
                            <div>
                            <b>Olatunde Ibrahim</b>    
                                commented on your post
                                </div>
                    <small className='text-muted'>1 HOUR AGO</small>
                        </div>
                    </div>
                </div>
                <div className='notification-info-container'>
                    <div className='notification-info'>
                        <div className='profile-pics'>
                            <img src="seyi.jpg" alt="" />
                        </div>
                        <div className='notification'>
                            <div>
                            <b>Ekundayo Oluwaseyi</b>
                            liked your post
                            </div>
                            <small  className='text-muted'>4 MINUETE AGO</small>
                        </div>
                    </div>
                </div>
                <div className='notification-info-container'>
                    <div className='notification-info'>
                        <div className='profile-pics'>
                            <img src="olami.jpg" alt="" />
                        </div>
                        <div className='notification'>
                            <div>
                            <b>David Beck</b>
                            accepted your friend request
                            </div>
                            <small  className='text-muted'>4 DAYS AGO</small>
                        </div>
                    </div>
                </div>
                <div className='notification-info-container'>
                    <div className='notification-info'>
                        <div className='profile-pics'>
                            <img src="babe.jpg" alt="" />
                        </div>
                        <div className='notification'>

                                <div>
                                <b>Mariam Peter</b>
                                commented on a post you are tagged in
                                </div>
                            

                            <small className='text-muted'>2 HOURS AGO</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar