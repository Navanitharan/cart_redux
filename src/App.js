import './App.css';
import Card from './Card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './Reducers/Product-react';
import 'bootstrap/dist/css/bootstrap.css'
import { Provider } from './Usercontext';
import { store } from './Store';

function App() {


  
    let products= [
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "qty":1,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "img":"https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg"
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "qty":1,
            "brand": "Apple",
            "category": "smartphones",
            "img":"https://m.media-amazon.com/images/I/611mRs-imxL._AC_UY327_FMwebp_QL65_.jpg"
          
            
        },
        {
            "id": 3,
            "title": "Samsung  9",
            "description": "Samsung's new variant ",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "qty":1,
            "brand": "Samsung",
            "category": "smartphones",
            "img": "https://cdn.dummyjson.com/product-images/3/1.jpg",
            
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 ",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "qty":1,
            "brand": "OPPO",
            "category": "smartphones",
            "img": "https://rukminim2.flixcart.com/image/416/416/kpbipow0/mobile/c/x/1/f19-cph2219-oppo-original-imag3kvkwxhhxjha.jpeg?q=70&crop=false",
            
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huaweis re-badged ",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
             "qty":1,
            "brand": "Huawei",
            "category": "smartphones",
            "img": "https://rukminim2.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/y/b/p30-lite-128-c-marie-l22a-huawei-4-original-imafghwdpthze4pb.jpeg?q=70&crop=false",
            
        }
    ]
    const dispatch = useDispatch();

    useEffect(() => {
      products.forEach(product => dispatch(addProduct(product)));
    }, [dispatch]);
  


  return (
    <Provider>
    <div className="App">
     
     <div className='container mt-5'>  
     <div  className='row'>

    {products.map(product => (
      <Card  key={product.id} product={product}/>
    ))}
    
    </div>
  </div>
</div>
</Provider>
  

  );
}

export default App;
