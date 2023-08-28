import { useState } from "react";
import '../App.css'
const ProductDetailsCard = ({ data , TotalValue ,setTotalValue}) => {
  const [CartValue, setCartValue] = useState(0);

  const IncreaseCartValue = () => {
    setCartValue(CartValue + 1);
    setTotalValue(TotalValue+1)
  };

  const DecreaseCartValue = () => { 
    if (CartValue > 0) {
      setCartValue(CartValue - 1);
      setTotalValue(TotalValue-1)
    }
  };

  return (

   
    <>
      <div className="CardContainer" >
        <img className="CardImage" src={data.Image} />
        <h4>
          Name {"->"} {data.Name}
        </h4>
        <p>
          <strong>Description</strong> - {data.Description}
        </p>

        <p>
          <strong>Price - {'$'}{data.Price}</strong>
        </p>

        {CartValue > 0 ? (
          <>
            <button className="CartButton CartButton1" onClick={() => DecreaseCartValue()}>Subtract</button>{" "}
            {CartValue}{" "}
            <button className="CartButton CartButton1" onClick={() => IncreaseCartValue()}>Add</button>
          </>
        ) : (
          <button className="CartButton CartButton1" onClick={() => IncreaseCartValue()}>Add to Cart</button>
        )}
      </div>
    </>
  );
};

export default ProductDetailsCard;
