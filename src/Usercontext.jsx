import { createContext, useState } from "react";


let UserContext = createContext();


export const Provider = ({ children }) => {
  
 

 const [item,setitem] =useState([])
  
 const[totel1,settotel1] = useState(549)
 const[totel2,settotel2] = useState(899)
 const[totel3,settotel3] = useState(1249)
 const[totel4,settotel4] = useState(280)
 const[totel5,settotel5] = useState(499)

 console.log(totel1)
  


  function addToCart(product, quantity) {
    const totalPrice = product.price * quantity;
  
    switch (product.id) {
      case 1:
        settotel1(totalPrice);
     
        break;
      case 2:
        settotel2(totalPrice);
      
        break;
      case 3:
        settotel3(totalPrice);
        break;
      case 4:
        settotel4(totalPrice);
        break;
      case 5:
        settotel5(totalPrice);
        break;
      default:
        break;
    }
  
    
  }
  

    
  
     
  
   



  return (
  <UserContext.Provider value={{item ,addToCart,totel1,totel2,totel3,totel4,totel5}}>
    {children}
  </UserContext.Provider>
  )
}

export default UserContext;