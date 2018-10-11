class vitoria3 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'vitoria3'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('vitoria3', 'assets/vitoria3.png');
		this.load.image('voltar', 'assets/setaVoltar.png');
		
	}

	create ()
	{

		this.add.image(640, 360, 'vitoria3');
		
		this.startBtn = this.add.sprite(240, 650, 'voltar').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('vitoria3','lago_legal'); });
		
	}
	update ()
	{	
		
	}
}