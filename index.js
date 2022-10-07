document.getElementById('generate-random-card').addEventListener('click', drawRandonCard);

async function deckOfCards(){
    const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    const response = await fetch(url);
    return await response.json();
}


async function drawACard(deck_id){
    const url = `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
    const response = await fetch(url);
    return await response.json();
}

async function drawRandonCard(){
    const deck = await deckOfCards();
    const json = await drawACard(deck.deck_id);
    const letterImage = json.cards[0].image; 
    document.getElementById('letter-image').src = letterImage;
}

drawRandonCard();