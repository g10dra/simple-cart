import { useContext } from "react"
import AppContext from "./AppContext"
import ALL_PRODUCTS from './resources/products';

export default function Cart() {

    const { cartData } = useContext(AppContext);

    let totalCartValue = 0;
    ALL_PRODUCTS.forEach(item => {
        if (cartData.includes(item['_id'])) {
            totalCartValue += Number(item.price)
        }
    })

    return (
        <div>
            {
                ALL_PRODUCTS.map(item => (
                    (cartData.includes(item['_id'])) ? (
                        <p><b>Name : {item.title} , Price : {item.price}   </b></p>
                    ) : null
                ))
            }

            <p style={{ width: '100%', color: 'green' }} >
                TOTAL CART VALUE IS : {totalCartValue}
            </p>
        </div>
    )

}