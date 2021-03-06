class teste7 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste7'});
		var gameOver = false;
	}
	
	preload ()
	{
        this.load.image('certoOuErrado', 'assets/certoOuErrado.png');
        this.load.image('problema7', 'assets/vilao2/problema7.png');
		this.load.image('buttonCerto', 'assets/vilao2/buttonCerto.png');
		this.load.image('buttonErrado', 'assets/vilao2/buttonErrado.png');
		this.load.image('Protagonista1', 'assets/Protagonista1.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{
		
        this.add.image(640, 360, 'certoOuErrado');
        
        this.add.image(650, 575, 'problema7');

		if (personagem == 1){
			this.add.image(180, 500, 'Protagonista1');
		}
		if (personagem == 2){
			this.add.image(180, 500, 'Protagonista2');
		}
		
		this.add.image(1100, 500, 'Vilão1');
		
		this.vidasText = this.add.text(10, 48, 'Vidas: ' + vidasRestantes, { font: '32px Arial', fill: '#000000' });
		
	;

		this.startBtn = this.add.sprite(506, 674, 'buttonCerto').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste7','vitoria2'); juju = 1; totalMoedas = totalMoedas + 20; score = score + 20; carregarMoeda();});


		this.startBtn = this.add.sprite(790, 674, 'buttonErrado').setInteractive();
		this.startBtn.on('pointerdown', function (event) {testeObj7.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});
		
	}

	updateVidas ()
    {	
		vidasRestantes--; 
        testeObj7.vidasText.setText('Vidas: ' + vidasRestantes);
		
		if (vidasRestantes < 0){
			vidasRestantes = 3;
			testeObj7.vidasText.setText('Vidas: ' + vidasRestantes);
			game.scene.switch('teste7','game_over2');
		}
    }
	
	update ()
	{	
		
		testeObj7.vidasText.setText('Vidas: ' + vidasRestantes);
	}

}