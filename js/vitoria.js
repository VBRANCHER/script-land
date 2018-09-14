class vitoria extends Phaser.Scene {
	constructor ()
	{
		super({key: 'vitoria'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('vitoria', 'assets/vitoria.png');
		this.load.image('voltar', 'assets/setaVoltar.png');
		
	}

	create ()
	{

		this.add.image(640, 360, 'vitoria');
		
		this.startBtn = this.add.sprite(240, 650, 'voltar').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('vitoria','lugar_legal'); });
		
	}
	update ()
	{	
		
	}
}