class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }
  shuffleCards() {
    let shuffledCards = [];
    for(let i=0;i<this.cards.length;i++){
      shuffledCards.push(this.cards.splice(Math.floor(this.cards.length*Math.random),1))
    }
    this.cards = shuffledCards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if(card1===card2) {
      this.pairsGuessed++;
      return true;
    }
    else {
      return false;
    }
  }
  isFinished() {
    if(this.pairsGuessed === this.cards.length) return true;
    return false;
  }
}