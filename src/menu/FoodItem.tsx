import React, { useState } from 'react';
import { Button } from "@/components/ui/button";

type FoodItemProps = {
  makanan: string;
  harga: string;
  image?: string;
};

const FoodItem3: React.FC<FoodItemProps> = ({ makanan, harga, image }) => {
    const [count, setCount] = useState(0);
    const add = () => {
      if (count === 99){
        return
      }
      setCount(count + 1);
    }
  
    const remove = () => {
      if (count === 0) {
        return
      }
  
      setCount(count - 1);
    }
  
    const placeholder = "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"

    return <div style={{border:'1px solid black', marginLeft: '20px', borderRadius: '10px', marginBottom: '20px'}}>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 180px)'}}>
        <div style={{width: '170px', height: '140px',  display: 'flex', margin: '20px', overflow: 'hidden', justifyContent: 'center', marginLeft: '20px', borderRadius: '10px'}}>
          <img src={image || placeholder}></img>
        </div>
        <div style={{marginLeft: '10px', justifyItems: 'center', textAlign: 'center', padding: '20px'}}>
          <p>{makanan}</p> 
          <p>{harga}</p>
          {count == 0 && <Button onClick={add}>Tambah</Button>}
  
          {count >= 1 && <div>
          <Button onClick={remove}>-</Button> {count} <Button onClick={add}>+</Button>
          </div>}
        </div>
      </div>
    </div>
}

// <div>
// <img src={props.image}></img>
// </div>

export default FoodItem3;
