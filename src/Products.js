import { useContext } from "react"
import AppContext from "./AppContext"
import ALL_PRODUCTS from './resources/products';
export default function Products(){
  
    const {cartData,addProduct,removeProduct}= useContext(AppContext);

   

    return (
       <table style={{width:'100%'}} border="1">
           <tbody>
           {
               ALL_PRODUCTS && ALL_PRODUCTS?.map((product,index)=>(

                <tr key={index}>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td><img style={{width:'100px',height:'100px'}} src={'/assets/'+product.image} title={product.title} alt={product.title} /></td>
                    <td>{product.price}</td>
                    <td>

                        {
                            (cartData?.includes(product['_id']))?

                            <button onClick={()=>removeProduct(product['_id'])} style={{backgroundColor:'red'}}>Remove from Cart</button>
                        

                            :(
<button onClick={()=>addProduct(product['_id'])} style={{backgroundColor:'green'}}>Add to Cart</button>
                        
                            )
                        }
                        
                        
                        
                        
                        </td>
                </tr>

               ))
           }</tbody>
        
       </table>
    )

}