const cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

let memoryGame = new MemoryGame(cards);

document.addEventListener("DOMContentLoaded", function(event) { 
  let html = '';
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory_board').innerHTML = html;

  //
  let reveal = (card) => {
    let reveal = card.nextSibling || card.previousSibling;
    card.classList = 'front';
    reveal.classList = 'back';

  }


  // Bind the click event of each element to a function
  document.querySelectorAll('.back').forEach( card => {
    card.onclick = function() {
      // TODO: write some code here
        memoryGame.pickedCards.push(card);
        if(memoryGame.pickedCards.length === 2){
          if(memoryGame.pickedCards[0].name === memoryGame.pickedCards[1].name) {
            memoryGame.pickedCards[0].parentElement.style.visibility = "hidden"; 
            memoryGame.pickedCards[1].parentElement.style.visibility = "hidden";
            
          }
          else {

          }
        }
        reveal(card)
      console.log('Card clicked: ', memoryGame.pickedCards);
      // document.querySelectorAll('.front')
    };
  });
  // document.querySelectorAll('.front').forEach( card => {
  //   card.onclick = function() {
  //     // TODO: write some code here
  //     let reveal = card.nextSibling || card.previousSibling;
  //     card.classList = 'front';
  //     // reveal.classList = 'back';

  //     console.log('Card clicked: ', card);
  //   };
  // });
});


