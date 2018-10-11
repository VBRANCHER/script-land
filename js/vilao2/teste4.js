class teste4 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste4'});
		var gameOver = false;
	}
	
	preload ()
	{
        this.load.image('pergunta', 'assets/pergunta.png');
        this.load.image('problema4', 'assets/vilao2/problema4.png');
		this.load.image('buttonA4', 'assets/vilao2/buttonA4.png');
		this.load.image('buttonB4', 'assets/vilao2/buttonB4.png');
		this.load.image('buttonC4', 'assets/vilao2/buttonC4.png');
		this.load.image('buttonD4', 'assets/vilao2/buttonD4.png');
		this.load.image('Protagonista1', 'assets/Protagonista1.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{
		
        this.add.image(640, 360, 'pergunta');
        
        this.add.image(650, 510, 'problema4');

		if (personagem == 1){
			this.add.image(180, 500, 'Protagonista1');
		}
		if (personagem == 2){
			this.add.image(180, 500, 'Protagonista2');
		}
		
		this.add.image(1100, 500, 'Vilão1');
		
		this.vidasText = this.add.text(10, 48, 'Vidas: ' + vidasRestantes, { font: '32px Arial', fill: '#000000' });
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA4').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste4','teste5'); score = score + 10; carregarMoeda();});

		this.startBtn = this.add.sprite(506, 674, 'buttonB4').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj4.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});

		this.startBtn = this.add.sprite(785, 596, 'buttonC4').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj4.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});

		this.startBtn = this.add.sprite(790, 674, 'buttonD4').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj4.updateVidas(); score = score - 5;
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});
		
	}

	updateVidas ()
    {	
		vidasRestantes--; 
        testeObj4.vidasText.setText('Vidas: ' + vidasRestantes);
		
		if (vidasRestantes < 0){
			vidasRestantes = 3;
			testeObj4.vidasText.setText('Vidas: ' + vidasRestantes);
			game.scene.switch('teste4','game_over2');
		}
    }
	
	update ()
	{	
		testeObj4.vidasText.setText('Vidas: ' + vidasRestantes);
	
	}

}