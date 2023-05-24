import { createContext } from "react";
import { useState } from "react";

const MenuContext= createContext()



export function MenuProvider({children}){
    const [btn, setbtn]=useState("thanks");

    const remove=()=>{
      setbtn("kn")
      
    };
  
    

    const add=()=>{
      setbtn("spolknd")
     
    };
    console.log(btn)
  
    return(
            <MenuContext.Provider value={{btn,remove,add}}>{children}</MenuContext.Provider>
    )
        
}



export default MenuContext;