import { useContext } from "react"
import UserContext from "../context/userContext"


const InvoiceDemoComp = () => {
    const {product, qty, rate} = useContext(UserContext)

    console.log(product, qty, rate)
  return (
    <div>
      
    </div>
  )
}

export default InvoiceDemoComp
