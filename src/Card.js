import React, { useContext } from 'react';
import UserContext from './Usercontext';

const Card = ({ product }) => {

  const user = useContext(UserContext)


  return (
    <div className='col-12 '>
      <div class="card w-100 mb-3" style={{ backgroundColor: "#F4F9F9" }}>
        <div class="card-body">
          <div className='Top-box d-flex justify-content-around '>

            <div className='first-section d-flex justify-content-evenly'>

              <div className='img-section '>
                <img className='img' style={{ height: "150px" }} src={product.img} />
              </div>
              <div className='content-section' style={{ marginLeft: '70px', textAlign: "start" }} >
                <h2 className='title'>{product.title}</h2>
                <h6>Deatails & Core</h6>
                <p>{product.description}</p>
                <p style={{marginTop:"-10px",fontSize: "15px"}}>more...</p>
                <h5>Sustaniablity</h5>
              </div>
            </div>
            <div className='rate'>
              <div className='remove d-flex '>
                <label className='me-2' >Select Quantity:</label>
              
                <select style={{ height: "30px", width: "40px" }}  name="quantity" id="quantity" onChange={(e)=>user.addToCart(product,parseInt(e.target.value))} >
                  {[1,2,3,4,5,6,7,8,9,10].map((value)=>(
                    <option value={value}>{value}</option>
                  ))}
                </select>

   


                <h3 className='card-price' style={{ marginLeft: "20px" }}>${product.price}</h3>

              </div>


            </div>

          </div>

        </div>
        <hr style={{ width: '80%', margin: '0 auto' }} />
        <div className='second-section d-flex justify-content-around mt-5 '>
          <div className='totel-text ' style={{ marginLeft: "-190px" }}>
            <h5>DISCOUNT:</h5>
            <h5>SHIPPING:</h5>
          </div>
          <div className='total' style={{ marginRight: "-150px" }}>
            <h5> $ {product.discountPercentage}</h5>
            <h5>FREE</h5>

          </div>

        </div>
        <hr style={{ width: '80%', margin: '0 auto' }} />
        <div className='row'>
          <div className='col-12'>
            <div className='second-section d-flex justify-content-around mt-5 '>
              <div className='totel-text ' style={{ marginLeft: "-150px" }}>
                <h3 className='h3'>TOTAL:</h3>
              </div>
              <div className='totel' style={{ marginRight: "-190px" }} >
                <h4 className='h4' >{product.id===1 && `$${user.totel1}`||product.id === 2 && `$${user.totel2}`||product.id===3 && `$${user.totel3}`||product.id===4 && `$${user.totel4}`||product.id===5 && `$${user.totel5}`}  </h4>
                <p style={{ color: "#FF8911" ,}} className='col'>Get Daily Cash With Nespola Card</p>
              </div>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Card

