class teste3 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste3'});
		var gameOver = false;
		
	}
	
	preload ()
	{
        this.load.image('pergunta', 'assets/pergunta.png');
        this.load.image('problema3', 'assets/vilao1/problema3.png');
		this.load.image('buttonA3', 'assets/vilao1/buttonA3.png');
		this.load.image('buttonB3', 'assets/vilao1/buttonB3.png');
		this.load.image('buttonC3', 'assets/vilao1/buttonC3.png');
		this.load.image('buttonD3', 'assets/vilao1/buttonD3.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{

        this.add.image(640, 360, 'pergunta');
        
        this.add.image(650, 510, 'problema3');

		this.add.image(180, 500, 'Protagonista2');
		
		this.add.image(1100, 500, 'Vilão1');
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA3').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste3','game_over'); });

		this.startBtn = this.add.sprite(506, 674, 'buttonB3').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste3','game_over'); });

		this.startBtn = this.add.sprite(785, 596, 'buttonC3').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste3','game_over'); });

		this.startBtn = this.add.sprite(790, 674, 'buttonD3').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste3','loja'); });
		
	}
	
	update ()
	{	
		
	
	}

	gameOver(){
		game.scene.switch('Teste','game_over');
	}
}