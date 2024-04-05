import ShopGrid from "../components/ShopGrid";
import shopItems from "../shopseed";
function ShopPage() {
    console.log("Shop items",shopItems)
    return (<>
        {
            shopItems.map((item) => (<ShopGrid item={item} />))
        }
    </>);
}

export default ShopPage;