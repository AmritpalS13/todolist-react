
import './header.css';

const HeaderDisplay = ( { value } ) => {

    return (
        <>
            <button className="btn" onClick={value}>Display About</button>
        </>
    );


}

export default HeaderDisplay;