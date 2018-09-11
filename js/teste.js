class teste extends Phaser.Scene {
	constructor ()
	{
		super({key: 'Teste'});
		var gameOver = false;
		var tempo;
		var timedEvent;
		var total = 0; 
	}
	
	preload ()
	{
		this.load.image('pergunta', 'assets/pergunta.png');
		this.load.image('buttonA', 'assets/buttonA.png');
		this.load.image('buttonB', 'assets/buttonB.png');
		this.load.image('buttonC', 'assets/buttonC.png');
		this.load.image('buttonD', 'assets/buttonD.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{
		this.timedEvent = this.time.delayedCall(15000, this.gameOver, this.updateCounter, this);

		this.add.image(640, 360, 'pergunta');
		
		this.tempo = this.add.text(500,76);

		this.add.image(180, 500, 'Protagonista2');
		
		this.add.image(1100, 500, 'Vilão1');
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('Teste','game_over'); });

		this.startBtn = this.add.sprite(506, 674, 'buttonB').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('Teste','game_over'); });

		this.startBtn = this.add.sprite(785, 596, 'buttonC').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('Teste','loja'); });

		this.startBtn = this.add.sprite(790, 674, 'buttonD').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('Teste','game_over'); });
		
	}

	updateCounter() 
	{
		total++;
	}
	update ()
	{	
		this.tempo.setText(' ' + this.timedEvent.getProgress().toString().substr(0,1));
	
	}

	gameOver(){
		game.scene.switch('Teste','game_over');
	}
}
