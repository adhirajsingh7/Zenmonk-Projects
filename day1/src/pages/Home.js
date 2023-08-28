import { Button } from "@mui/material";
import ProductDetailsCard from "../components/ProductDetailsCard";
import data from '../MOCK_DATA.json'
import { useState } from "react";
import '../App.css'

const headingStyle = {
  display : "flex",
  justifyContents : "right" 
}


const Home = () => {
    // console.log(data[0].Name)
  const [CartTotalValue ,setCartTotalValue] = useState(0);
    
  return (
    <div>
    <h1 className="PageHeading" style={headingStyle}>{CartTotalValue > 0 ? CartTotalValue : 'Cart is Empty'}</h1>
    
    {
        data.map((item, index)=> 
            (
                <div key={index}>
                {/* {item.Name} */}
                <ProductDetailsCard  data={item} TotalValue = {CartTotalValue} setTotalValue={setCartTotalValue}/>
                <br/>
                </div>
            )
            
        )
    }
    <Button variant="contained">Hello world</Button>
    </div>
  );
};

export default Home;
