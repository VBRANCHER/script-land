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
		
	}

	create ()
	{

		this.add.image(640, 360, 'selecionaPersonagem');
		
		this.startBtn = this.add.sprite(610, 650, 'seta_avancar').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('selecionaPersonagem','tutorial'); });
		
	}
	update ()
	{	
		
	}
}