class teste5 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste5'});
		var gameOver = false;
	}
	
	preload ()
	{
        this.load.image('pergunta', 'assets/pergunta.png');
        this.load.image('problema5', 'assets/vilao2/problema5.png');
		this.load.image('buttonA5', 'assets/vilao2/buttonA5.png');
		this.load.image('buttonB5', 'assets/vilao2/buttonB5.png');
		this.load.image('buttonC5', 'assets/vilao2/buttonC5.png');
		this.load.image('buttonD5', 'assets/vilao2/buttonD5.png');
		this.load.image('Protagonista1', 'assets/Protagonista1.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{
		
        this.add.image(640, 360, 'pergunta');
        
        this.add.image(693, 520, 'problema5');

		if (personagem == 1){
			this.add.image(180, 500, 'Protagonista1');
		}
		if (personagem == 2){
			this.add.image(180, 500, 'Protagonista2');
		}
		
		this.add.image(1100, 500, 'Vilão1');
		
		this.vidasText = this.add.text(10, 48, 'Vidas: ' + vidasRestantes, { font: '32px Arial', fill: '#000000' });
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA5').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj5.updateVidas();});

		this.startBtn = this.add.sprite(506, 674, 'buttonB5').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj5.updateVidas();});

		this.startBtn = this.add.sprite(785, 596, 'buttonC5').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj5.updateVidas();});

		this.startBtn = this.add.sprite(790, 674, 'buttonD5').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste5','teste6'); juju = 1;});
		
	}

	updateVidas ()
    {	
		vidasRestantes--; 
        testeObj5.vidasText.setText('Vidas: ' + vidasRestantes);
		
		if (vidasRestantes < 0){
			vidasRestantes = 3;
			testeObj5.vidasText.setText('Vidas: ' + vidasRestantes);
			game.scene.switch('teste5','game_over2');
		}
    }
	
	update ()
	{	
		testeObj5.vidasText.setText('Vidas: ' + vidasRestantes);
	
	}

}