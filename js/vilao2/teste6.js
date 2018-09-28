class teste6 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste6'});
		var gameOver = false;
	}
	
	preload ()
	{
        this.load.image('pergunta', 'assets/pergunta.png');
        this.load.image('problema6', 'assets/vilao2/problema6.png');
		this.load.image('buttonA6', 'assets/vilao2/buttonA6.png');
		this.load.image('buttonB6', 'assets/vilao2/buttonB6.png');
		this.load.image('buttonC6', 'assets/vilao2/buttonC6.png');
		this.load.image('buttonD6', 'assets/vilao2/buttonD6.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{
		
        this.add.image(640, 360, 'pergunta');
        
        this.add.image(650, 510, 'problema6');

		this.add.image(180, 500, 'Protagonista2');
		
		this.add.image(1100, 500, 'Vilão1');
		
		this.vidasText = this.add.text(10, 48, 'Vidas: ' + vidasRestantes, { font: '32px Arial', fill: '#000000' });
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA6').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj6.updateVidas();});

		this.startBtn = this.add.sprite(506, 674, 'buttonB6').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj6.updateVidas();});

		this.startBtn = this.add.sprite(785, 596, 'buttonC6').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste6','teste7'); });;

		this.startBtn = this.add.sprite(790, 674, 'buttonD6').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj6.updateVidas();});
		
	}

	updateVidas ()
    {	
		vidasRestantes--; 
        testeObj6.vidasText.setText('Vidas: ' + vidasRestantes);
		
		if (vidasRestantes < 0){
			vidasRestantes = 3;
			testeObj6.vidasText.setText('Vidas: ' + vidasRestantes);
			game.scene.switch('teste4','game_over');
		}
    }
	
	update ()
	{	
		
	
	}

}