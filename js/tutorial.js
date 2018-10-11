class tutorial extends Phaser.Scene {
	constructor ()
	{
		super({key: 'tutorial'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('tutorial', 'assets/tutorial.png');
		
	}

	create ()
	{

		this.add.image(640, 360, 'salvar');
		
		this.startBtn = this.add.sprite(640, 360, 'tutorial').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('tutorial','tutorial2'); });
		
	}
	update ()
	{	
		
	}
}