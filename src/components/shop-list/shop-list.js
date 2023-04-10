import ShopListItem from '../shop-list-item/shop-list-item';

import './shop-list.css';

const ShopList = ({data, onDelete, onIncrease, onRise}) => {
    
    const element = data.map(item => {
        const {id} = item;
        return <ShopListItem   name={item.name} 
                                    price={item.price} 
                                    key={item.id} 
                                    increase={item.increase}
                                    rise={item.rise}
                                    onDelete={() => onDelete(id)}
                                    onIncrease={() => onIncrease(id)}
                                    onRise={() => onRise(id)}/>
    })

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    )
}

export default ShopList;