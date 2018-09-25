class teste4 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste4'});
		var gameOver = false;
	}
	
	preload ()
	{
        this.load.image('pergunta', 'assets/pergunta.png');
        this.load.image('problema1', 'assets/vilao2/problema1.png');
		this.load.image('buttonA', 'assets/vilao2/buttonA.png');
		this.load.image('buttonB', 'assets/vilao2/buttonB.png');
		this.load.image('buttonC', 'assets/vilao2/buttonC.png');
		this.load.image('buttonD', 'assets/vilao2/buttonD.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{
		
        this.add.image(640, 360, 'pergunta');
        
        this.add.image(650, 510, 'problema1');

		this.add.image(180, 500, 'Protagonista2');
		
		this.add.image(1100, 500, 'Vilão1');
		
		this.vidasText = this.add.text(10, 48, 'Vidas: ' + vidasRestantes, { font: '32px Arial', fill: '#000000' });
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste4','vitoria'); juju = 1;});

		this.startBtn = this.add.sprite(506, 674, 'buttonB').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj4.updateVidas();});

		this.startBtn = this.add.sprite(785, 596, 'buttonC').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj4.updateVidas();});

		this.startBtn = this.add.sprite(790, 674, 'buttonD').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj4.updateVidas();});
		
	}

	updateVidas ()
    {	
		vidasRestantes--; 
        testeObj4.vidasText.setText('Vidas: ' + vidasRestantes);
		
		if (vidasRestantes < 0){
			vidasRestantes = 3;
			testeObj4.vidasText.setText('Vidas: ' + vidasRestantes);
			game.scene.switch('teste4','game_over');
		}
    }
	
	update ()
	{	
		
	
	}

}