class game_over3 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'game_over3'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('game_over', 'assets/game_over.png');
		this.load.image('tentar_novamente', 'assets/tentar_novamente.png');
	}

	create ()
	{

		this.add.image(640, 360, 'game_over');
		
		this.startBtn = this.add.sprite(510, 396, 'tentar_novamente').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('game_over3','teste8'); });
		
	}
	update ()
	{	
		
	}
}