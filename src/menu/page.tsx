"use client"
import FoodItem3 from "./FoodItem"

const items = [
  {id: 1, makanan: "Fried Chicken", harga: "Rp 10.000,00", image:""},
  {id: 2, makanan: "Fried Noodles", harga: "Rp 12.000,00", image:"https://aslimasako.com/storage/post/new-title-29022024-100423.jpg"},
  {id: 3, makanan: "Chicken Soup", harga: "Rp 8.000,00", image:"https://asset.kompas.com/crops/TldzyblipZ-UGSWy5Sz_w2zQ04g=/119x0:897x519/1200x800/data/photo/2019/12/18/5df9dcb734209.jpg"}
]

export default function page(){
  return <div>
    <h1 style={{marginLeft: '20px', marginBottom: '10px'}}>Food Menu</h1>
    
    {items.map ((item) =>  {
      return <FoodItem3 key={item.id} makanan={item.makanan} harga={item.harga} image={item.image} />
    })} 


  </div>
}
