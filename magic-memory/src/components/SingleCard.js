import './SingleCard.css'
function SingleCard({ card, handleChoice }) {
    return (
        <div>
            <div className='card'>
                <img className='card-front' src={card.src} alt='card front' />
                <img className='card-back' 
                src='/img/cover.png' 
                alt='card back' 
                onClick={() => {handleChoice(card)}}/>
            </div>
        </div>
    )
}

export default SingleCard;