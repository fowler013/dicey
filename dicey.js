// this will be the let values I will create//
let diceArray= [];
let dieContainer = document.getElementById('container') // this is the empty div container//
let rollDice = document.getElementById('rollDice')// this is for the roll dice button//
let createDie = document.getElementById('createDie')
// this is where I will create the Class for my dice//
var Dice = function() {
        this.value=this.roll();
        this.div = document.createElement('div'); //I must connect this to the html//
        this.div.innerText = this.value; // the innerText is now connected to the this.value//
        this.div.className = 'dice-box';// this is the connection to the CSS information//
        dieContainer.appendChild(this.div); // this is where the new div created in JS is connected to the HTML div 'container'//
        // with this function below, when you click on the dice the dice will be change numbers//
        this.div.addEventListener('click', function(){
            this.value = this.roll();
            this.div.innerText = this.value;
        }.bind(this));
        //with this function below, when you doubleclick on the dice, the dice will be removed//
        this.div.addEventListener('dblclick', function(){
        this.div.remove();
        var id = diceArray.indexOf(this);
        diceArray.splice(id, 1); // this will add the id I just created above into the diceArray//
    }.bind(this));
}

//this will be my dice Method and also the link to the Parent(Dice)//
Dice.prototype.roll= function() {
    return rand();
}

//this is where my roll random function
function rand(){
    return Math.floor(Math.random()* 6) + 1;
}

// This is where I connect the new dice button with a click function//
createDie.addEventListener('click', function(){
    var newDice = new Dice();
    diceArray.push(newDice);
})

//this is where I will create the function that will randomly roll the dice of my created Dice//
rollDice.addEventListener('click', function(){
    for(var i =0; i<diceArray.length; i++){
        diceArray[i].value=diceArray[i].roll();
        diceArray[i].div.innerText = diceArray[i].value;
    }
})