import {useProducts} from "../../hooks/products";
import {MenuLoader} from "../admin_panel/MenuLoader";
import {Menu} from "./Menu";

export function SetupMenu() {

    const {products, loading} = useProducts()

    return (
        <div>
        {loading ? <MenuLoader/>
                 : <Menu products={products}/>}
        </div>
    )
}