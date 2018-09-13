class teste extends Phaser.Scene {
	constructor ()
	{
		super({key: 'Teste'});
		var gameOver = false;
		
	}
	
	preload ()
	{
		this.load.image('pergunta', 'assets/pergunta.png');
		this.load.image('problema', 'assets/vilao1/problema.png');
		this.load.image('buttonA', 'assets/vilao1/buttonA.png');
		this.load.image('buttonB', 'assets/vilao1/buttonB.png');
		this.load.image('buttonC', 'assets/vilao1/buttonC.png');
		this.load.image('buttonD', 'assets/vilao1/buttonD.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{

		this.add.image(640, 360, 'pergunta');

		this.add.image(650, 510, 'problema');

		this.add.image(180, 500, 'Protagonista2');
		
		this.add.image(1100, 500, 'Vilão1');
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('Teste','game_over'); });

		this.startBtn = this.add.sprite(506, 674, 'buttonB').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('Teste','game_over'); });

		this.startBtn = this.add.sprite(785, 596, 'buttonC').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('Teste','teste2'); });

		this.startBtn = this.add.sprite(790, 674, 'buttonD').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('Teste','game_over'); });
		
	}
	
	update ()
	{	
		
	
	}

	gameOver(){
		game.scene.switch('Teste','game_over');
	}
}
