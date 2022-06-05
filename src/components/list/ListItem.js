
import './list.css';
const ListItem = ({ item, id }) => {
    return (
        <div className="item-container">
            <div className='item-text-container'>
                <h3>{item.title}</h3>
                <p>{item.date}</p>
            </div>
        </div>
    )
}

export default ListItem;