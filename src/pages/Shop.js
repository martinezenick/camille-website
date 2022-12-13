import ShopGrid from '../components/ShopGrid/ShopGrid';
import './Shop.css';

const Shop = () => {
    return(
        <div>
            <h3>BOARDS</h3>
            <p className="shop_content">Perfect for having people over, book clubs, holiday parties, game nights, & literally any other reason you can think of to have a big board of meat and cheese.</p>
            <p>We currently serve the Winter Park, Florida area from the months of January to April & November to December.</p>
            <ShopGrid />
        </div>
    );
};

export default Shop;