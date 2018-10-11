class vitoria2 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'vitoria2'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('vitoria2', 'assets/vitoria2.png');
		this.load.image('voltar', 'assets/setaVoltar.png');
		
	}

	create ()
	{

		this.add.image(640, 360, 'vitoria2');
		
		this.startBtn = this.add.sprite(240, 650, 'voltar').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('vitoria2','spawn'); });
		
	}
	update ()
	{	
		
	}
}