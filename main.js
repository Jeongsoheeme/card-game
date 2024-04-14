for(let i=1; i < 9; i++){
    for(let k=0; k < 2; k++){
        let cardList = document.querySelector('#cardList');
        cardList.innerHTML += `<li class='card' id="0${i}"><img src="bgs/square-bg.jpg"></li>`;
    }
}

function timeEvent(){
    let gameTimer = document.getElementById('time');

    for(let i=25; i >= 0; i--){
        setTimeout(()=>{
            gameTimer.innerText = `${i}`;
        }, (25 - i) * 1000);
    }
}

function clickedCard() {
    let firstCard = false;
    let secondCard = false;

    function clickHandler(cardElement) {

        cardElement.addEventListener('click', function() {
            if (firstCard && secondCard) {
                return;
            }

            let cardId = this.id;
            this.innerHTML = `<img src="imgs/${cardId}.jpg">`;

            if (!firstCard) {
                firstCard = this;
            } else {
                secondCard = this;
            }

            if (firstCard.id === secondCard.id) {
                firstCard.removeEventListener('click', clickHandler);
                secondCard.removeEventListener('click', clickHandler);

                firstCard = false;
                secondCard = false;
            } else {
                setTimeout(() => {
                    firstCard.innerHTML = `<img src="bgs/square-bg.jpg">`;
                    secondCard.innerHTML = `<img src="bgs/square-bg.jpg">`;

                    firstCard = false;
                    secondCard = false;
                }, 1000);
            }
        });
    }

    document.querySelectorAll('.card').forEach(cardElement => {
        clickHandler(cardElement);
    });
}

timeEvent();

clickedCard();

