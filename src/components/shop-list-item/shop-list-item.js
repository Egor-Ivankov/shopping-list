import './shop-list-item.css';

const ShopListItem = (props) => {
        const {name, price, increase, rise, onDelete, onIncrease, onRise} = props;

        let classNames = "list-group-item d-flex justify-content-between";
        
        if (increase) {
            classNames += ' increase';
        }  

        if (rise) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={onRise}>{name}</span>
                <span className="list-group-item-span">{price} руб.</span>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={onIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
}

export default ShopListItem;