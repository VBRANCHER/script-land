class selecionaPersonagem extends Phaser.Scene {
	constructor ()
	{
		super({key: 'selecionaPersonagem'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('selecionaPersonagem', 'assets/selecionaPersonagem.png');
		this.load.image('seta_avancar', 'assets/seta_avancar.png');
		this.load.image('p1', 'assets/selecionar1.png');
		this.load.image('p2', 'assets/selecionar2.png');
		
	}

	create ()
	{

		this.add.image(640, 360, 'selecionaPersonagem');
		/*
		this.startBtn = this.add.sprite(610, 650, 'seta_avancar').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('selecionaPersonagem','tutorial'); });  */
		
		this.startBtn = this.add.sprite(178, 390, 'p1').setInteractive();
		this.startBtn.on('pointerdown', function (event) {personagem = 1; game.scene.switch('selecionaPersonagem','tutorial'); });
		
		this.startBtn = this.add.sprite(482, 390, 'p2').setInteractive();
		this.startBtn.on('pointerdown', function (event) {personagem = 2; game.scene.switch('selecionaPersonagem','tutorial'); });
		
	}
	update ()
	{	
		
	}
}