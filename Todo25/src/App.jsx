
import './App.css'
import{Counter} from './Counter'
import { Addcolor } from './Addcolor'
import { useState } from 'react'

const init_data = [
  {
      "name": "iPhone 15 (128 GB)",
      "poster": "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
      "price": "₹77,900 ",
      "rating": 3,
      "summary": "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more."
  },
  {
      "name": "iPhone 15 Pro (128 GB)",
      "poster": "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
      "price": "₹1,34,900 ",
      "rating": 3.5,
      "summary": " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant."
  },
  {
      "name": "Samsung Galaxy S23 5G (256GB Storage)",
      "poster": "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
      "price": "₹65,320",
      "rating": 4.7,
      "summary": "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever."
  },
  {
      "name": "Samsung Galaxy S23 Ultra 5G (256GB Storage)",
      "poster": "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
      "price": "₹1,00,000",
      "rating": 5.0,
      "summary": "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice."
  },
  {
      "name": "Apple AirPods Pro​",
      "poster": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
      "price": "₹20,999 ",
      "rating": 4.8,
      "summary": "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you."
  },
  {
      "name": "Apple Watch Series 9 [GPS + Cellular 41mm]",
      "poster": "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
      "price": "₹75,900 ",
      "rating": 4.9,
      "summary": "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
  },
  {
      "name": "Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
      "poster": "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
      "price": "₹22,999",
      "rating": 4.5,
      "summary": "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress."
  },
  {
      "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
      "poster": "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
      "price": "₹27,141",
      "rating": 4.3,
      "summary": "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you"
  },
  {
      "name": "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
      "poster": "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
      "price": "₹84,990",
      "rating": 5.0,
      "summary": "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power."
  },
  {
      "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
      "poster": "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
      "price": "₹1,10,790",
      "rating": 4.9,
      "summary": " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
  }
]

export default function App(){

const map_data = init_data

  return(
    <div className="App">
      {/* <Addcolor/> */}
      <div className="pdlist">
       {map_data.map((pd)=>(<Product product={pd}/>))}
      </div>
       
    </div>
  )
}

function Product({product}){

//  const Product = {
//  name:"Apple iPhone 15 Pro Max (256 GB)",
//  poster:"https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg",
//  rating :"5",
//  price:51790,
//  description:"FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant."

//  }
const [show,setShow] = useState(true)
 const ratcol = {
  color : product.rating > 4.5 ? "green":"red"
 }
 const specvis = {
  display : show ? "block": "none"
 }

  return (

    <div className="product-container">
      <img className="product-poster" src={product.poster} alt={Product.name}/>
      <div className="product-spec">
      <h1 className="product-name">{product.name}</h1>
      <p style = {ratcol}  className="product-rating">{product.rating}</p>
      </div>
      <button onClick={()=>{setShow(!show)}}>Toggle</button>
      <p style = {specvis} className="product-summary">{product.summary}</p>
      <div className="price-align">
      <p className="product-price">Price - Rs.{product.price}</p>
      <button>Add to Cart</button>
      </div>
      <Counter/>
      
    </div>
      
  )
}




