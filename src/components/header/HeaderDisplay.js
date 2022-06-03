
import './header.css';

const HeaderDisplay = ( { value } ) => {

    return (
        <>
            <button className="btn" onClick={value}>Add Item</button>
        </>
    );


}

export default HeaderDisplay;