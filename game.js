const gameState = {
    number: 0
}

function preload() {

}

function create() {
  gameState.scoreText = this.add.text(250, 20, 'Number: 0', { fontSize: '15px', fill: '#000' }) //Displaying Number
  //Adding Button
  gameState.button = this.add.rectangle(300,100,100,50,0x4c00ab);
  gameState.button.setInteractive();
  gameState.button.cooldown = 0
  //Button Behaviour
  gameState.button.on('pointerup', function(){
    if (gameState.button.cooldown == 0){
      gameState.number += 1 //Button Adds to Number
      gameState.scoreText.setText(`Number: ${gameState.number}`) //Updates Display
      gameState.button.cooldown += 60
      gameState.logText.setText(`\n You pressed the Button ${gameState.number} times! \n ${gameState.logText.text}`)
    }
  })
  gameState.logText = this.add.text(10, 0, '', { fontSize: '10px', wordWrap: { width: 200 }})
}
  
function update() {
  if (gameState.button.cooldown > 0) {
    gameState.button.cooldown -= 1
  } //cooldown logic
}


const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 300,
    backgroundColor: "00aba0",
    scene: {
        preload,
        create,
        update
    }
}

const game = new Phaser.Game(config)