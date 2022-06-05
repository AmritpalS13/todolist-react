import React, { useState } from 'react';
import ListItem from './ListItem';
import './list.css';

const ListContainer = ({ list }) => {
    return (
        <div className='list-container'>
            {list.map( (item) => {
                if(!item.completed) {
                    return(
                        <ListItem key={item.id} item={item}/>
                    )
                }
            })}
        </div>
    );

}

export default ListContainer;