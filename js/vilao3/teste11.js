class teste11 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'teste11'});
		var gameOver = false;
	}
	
	preload ()
	{
        this.load.image('certoOuErrado', 'assets/certoOuErrado.png');
        this.load.image('problema11', 'assets/vilao3/problema11.png');
		this.load.image('buttonCerto', 'assets/vilao3/buttonCerto.png');
		this.load.image('buttonErrado', 'assets/vilao3/buttonErrado.png');
		this.load.image('Protagonista1', 'assets/Protagonista1.png');
		this.load.image('Protagonista2', 'assets/Protagonista2.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{
		
        this.add.image(640, 360, 'certoOuErrado');
        
        this.add.image(645, 545, 'problema11');

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
		this.startBtn.on('pointerdown', function (event) {testeObj11.updateVidas(); score = score - 5; 
		if (score < 0){
			score = 0;
		}
		carregarMoeda();});
		
		this.startBtn = this.add.sprite(790, 674, 'buttonErrado').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('teste11','vitoria3'); john = 1; totalMoedas = totalMoedas + 20; score = score + 20; carregarMoeda();});;
		
	}

	updateVidas ()
    {	
		vidasRestantes--; 
        testeObj11.vidasText.setText('Vidas: ' + vidasRestantes);
		
		if (vidasRestantes < 0){
			vidasRestantes = 3;
            testeObj11.vidasText.setText('Vidas: ' + vidasRestantes);
			game.scene.switch('teste11','game_over3');
		}
    }
	
	update ()
	{	
		testeObj11.vidasText.setText('Vidas: ' + vidasRestantes);
	
	}

}