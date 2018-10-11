class teste2 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste2'});
		var gameOver = false;
	}
	
	preload ()
	{
        this.load.image('pergunta', 'assets/pergunta.png');
        this.load.image('problema2', 'assets/vilao1/problema2.png');
		this.load.image('buttonA2', 'assets/vilao1/buttonA2.png');
		this.load.image('buttonB2', 'assets/vilao1/buttonB2.png');
		this.load.image('buttonC2', 'assets/vilao1/buttonC2.png');
		this.load.image('buttonD2', 'assets/vilao1/buttonD2.png');
		this.load.image('Protagonista1', 'assets/Protagonista1.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão2', 'assets/Vilão2.png');
	}

	create ()
	{
		
        this.add.image(640, 360, 'pergunta');
        
        this.add.image(650, 510, 'problema2');
		
		if (personagem == 1){
			this.add.image(180, 500, 'Protagonista1');
		}
		if (personagem == 2){
			this.add.image(180, 500, 'Protagonista2');
		}
		
		this.add.image(1100, 500, 'Vilão2');
		
		this.vidasText = this.add.text(10, 48, 'Vidas: ' + vidasRestantes, { font: '32px Arial', fill: '#000000' });
		
		this.startBtn = this.add.sprite(506, 596, 'buttonA2').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste2','teste3'); score = score + 10; carregarMoeda();});

		this.startBtn = this.add.sprite(506, 674, 'buttonB2').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj2.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});

		this.startBtn = this.add.sprite(785, 596, 'buttonC2').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj2.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});

		this.startBtn = this.add.sprite(790, 674, 'buttonD2').setInteractive();
		this.startBtn.on('pointerdown', function (event) { testeObj2.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});
		
	}
	
	updateVidas ()
    {	
		vidasRestantes--; 
        testeObj2.vidasText.setText('Vidas: ' + vidasRestantes);
		
		if (vidasRestantes < 0){
			vidasRestantes = 3;
			testeObj2.vidasText.setText('Vidas: ' + vidasRestantes);
			game.scene.switch('teste2','game_over');
		}
    }
	
	update ()
	{	
		
		testeObj2.vidasText.setText('Vidas: ' + vidasRestantes);
	}

}