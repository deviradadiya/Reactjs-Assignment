import React, { useEffect, useState } from 'react'
import './Style.css'

const Product = () => {

   const [showFullDescription, setShowFullDescription] = useState(false);
   const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

    const [product, setProduct] = useState([])
    useEffect(() => {
      fetch('https://fakestoreapi.com/products').then((result) => {
        return result.json()
      }).then((result) => {
        console.log(result)
        setProduct(result)
      })
    
    }, [])
    


  return (
    <>
        <h2 style={{ paddingTop:'20px', fontSize: '28px' , textAlign:'center'}}>Our Products</h2>
        <div className="product-listing">
        {product.map((prd) =>{
            return (
                <>
                
                <div className="product-card">
                    <img src={prd.image}/>
                    <h3>{prd.title}</h3>
                    <p>
                            {showFullDescription ? prd.description : `${prd.description.slice(0, 80)}...`}
                            <button
                            onClick={toggleDescription}
                            style={{
                                background: "none",
                                color: "blue",
                                border: "none",
                                cursor: "pointer",
                                padding: 0,
                            }}
                            >
                            {showFullDescription ? " Read Less" : " Read More"}
                            </button>
                    </p>
                    <p>{prd.price}</p>
                    <button>Add to Cart</button>
                </div>
            
                </>
            )
        })}
        </div> 
        </>
  )
}

export default Product