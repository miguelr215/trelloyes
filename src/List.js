import React from 'react';
import Card from './Card.js';

function List(props){
    return (
        <section className='List'>
            <header>{props.header}</header>
            <div className='List-cards'>
                {props.cards.map(function(card){
                    return <Card title={card.title} content={card.content} key={card.id}/>;
                })}
            </div>
        </section>
    )
};

export default List;