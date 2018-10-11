class tutorial2 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'tutorial2'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('tutorial2', 'assets/tutorial2.png');
		
	}

	create ()
	{

		this.add.image(640, 360, 'salvar');
		
		this.startBtn = this.add.sprite(640, 360, 'tutorial2').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('tutorial2','lugar_legal'); });
		
	}
	update ()
	{	
		
	}
}