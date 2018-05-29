var objArray = [];

var Dice = function(){
    this.value = this.roll();
    this.div = document.createElement('div');
    this.div.innerText = this.value;
    this.div.className = 'dice';
    document.getElementById('container').appendChild(this.div);
    this.div.addEventListener('click',function(){
        this.value = this.roll();
        this.div.innerText = this.value;
    }.bind(this));
    this.div.addEventListener('dblclick', function(){
        this.div.remove();
         var id = objArray.indexOf(this);
        objArray.splice(id,1);
    }.bind(this))
}

Dice.prototype.roll = function(){
    return rand();
}

function rand(){
    return Math.floor(Math.random() * 6) + 1;
}

document.getElementById('getDie').addEventListener('click',function(){
    var d = new Dice();
    objArray.push(d);
})

document.getElementById('rollDie').addEventListener('click', function(){
        for(var i = 0; i<objArray.length;i++){
            objArray[i].value = objArray[i].roll();
            objArray[i].div.innerText = objArray[i].value;
        }
})

document.getElementById('sumDie').addEventListener('click', function(){
    var total = 0;
    for (var i=0;i<objArray.length;i++){
        total+=objArray[i].value;
    }
    alert('The sum of all dice add up to ' + total);
})