
import './list.css';
const ListItem = ({ item, id, deleteItem }) => {
    return (
        <div className="item-container">
            <div className='item-text-container'>
                <h3>{item.title}</h3>
                <p>{item.date}</p>
                <button className='btn btn-list-item' onClick={() => deleteItem(item.id)}>Delete</button>
                <label for="myCheck">checkbox</label>
            </div>
        </div>
    )
}

export default ListItem;