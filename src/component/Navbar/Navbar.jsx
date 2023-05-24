import React from 'react';
import "./Navbar.css";


const Navbar=()=>{
   return( 
            <div className='nav'>
                <div className='container'>
                    <div>
                    <h2>Lag<p>.<span></span></p></h2>
                    </div>
                        
                    <div className='profile-pics'>
                        <img src="ola.jpg" alt="" />
                    </div>
                </div >
            </div>
   )
}

export default Navbar;