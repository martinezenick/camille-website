import './BoardItem.css'
import { Link } from 'react-router-dom';

const ShopGridItem = (props) => {
    return(
                <div className="example">
                    <Link to={props.text}>
                    <img src={props.image} width="100%" height="100%"/>
                    <div className="content">
                        <div className="text">
                            {props.text}
                        </div>
                    </div>
                    </Link>
                </div>
    );
}

export default ShopGridItem;