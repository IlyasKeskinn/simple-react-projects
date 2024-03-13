import { useState } from 'react';


const MemoryCard = ({ card, selectedCardHandle, disabled, rotated }) => {

    const cardClick = () => {
        if (!disabled) {
            selectedCardHandle(card);
        }
    }

    return (
        <div className="card">
            <div className={rotated ? "rotated" : ''}>
                <img className='img-fluid card-front' src={card.path} alt='card.path' />
                <img className='img-fluid card-back' onClick={cardClick} src='/img/cover.jpeg' alt='card.path' />
            </div>
        </div>
    );
}



export default MemoryCard;