import React from 'react';
import Card from './Card.js';
import './List.css';

function List(props){
    return (
        <section className='List'>
            <header className='List-header'><h2>{props.header}</h2></header>
            <div className='List-cards'>
                {props.cards.map(function(card){
                    return <Card title={card.title} content={card.content} key={card.id}/>;
                })}
            </div>
        </section>
    )
};

export default List;