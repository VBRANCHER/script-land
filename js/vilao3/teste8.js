class teste8 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste8'});
		var gameOver = false;		
	}
	
	preload ()
	{
		this.load.image('pergunta', 'assets/pergunta.png');
		this.load.image('problema8', 'assets/vilao3/problema8.png');
		this.load.image('buttonA8', 'assets/vilao3/buttonA8.png');
		this.load.image('buttonB8', 'assets/vilao3/buttonB8.png');
		this.load.image('buttonC8', 'assets/vilao3/buttonC8.png');
		this.load.image('buttonD8', 'assets/vilao3/buttonD8.png');
		this.load.image('Protagonista1', 'assets/Protagonista1.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão3', 'assets/Vilão3.png');
	}

	create ()
	{
		
		this.add.image(640, 360, 'pergunta');

		this.add.image(650, 510, 'problema8');
	
		if (personagem == 1){
			this.add.image(180, 500, 'Protagonista1');
		}
		if (personagem == 2){
			this.add.image(180, 500, 'Protagonista2');
		}
		
		this.add.image(1100, 500, 'Vilão3');
		
		this.vidasText = this.add.text(10, 48, 'Vidas: ' + vidasRestantes, { font: '32px Arial', fill: '#000000' });
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA8').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj8.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});

		this.startBtn = this.add.sprite(506, 674, 'buttonB8').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste8','teste9'); score = score + 10; carregarMoeda();});

		this.startBtn = this.add.sprite(785, 596, 'buttonC8').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj8.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});

		this.startBtn = this.add.sprite(790, 674, 'buttonD8').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj8.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});
		
	}
	
	
	
	updateVidas ()
    {	
		vidasRestantes--; 
        testeObj8.vidasText.setText('Vidas: ' + vidasRestantes);
		
		if (vidasRestantes < 0){
			vidasRestantes = 3;
			testeObj8.vidasText.setText('Vidas: ' + vidasRestantes);
			game.scene.switch('teste8','game_over3');
		}
    }
	
	update ()
	{	
		testeObj8.vidasText.setText('Vidas: ' + vidasRestantes);
	}
}
