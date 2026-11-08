function rollDice() {
    const numDice = document.getElementById('numDice').value;       
    const diceResult = document.getElementById('diceResult');
    const diceImages  = document.getElementById('diceImages');
    const totalScore = document.getElementById('totalScore'); 
    const values = [];
    const images = [];
    let sum = 0;

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.dice.png" alt="Dice ${value}">` );
        sum += value;
    }

    diceResult.textContent =`dice: ${values.join(',')}`;
    diceImages.innerHTML = images.join(' ');
    totalScore.textContent = ` Total Score: ${sum}`;


}


