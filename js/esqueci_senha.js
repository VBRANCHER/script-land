class esqueci_senha extends Phaser.Scene {
	constructor ()
	{
		super({key: 'esqueci_senha'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('esqueci', 'assets/recuperar.png');
		this.load.image('voltar', 'assets/setaVoltar.png');
		
	}

	create ()
	{

		this.add.image(640, 360, 'esqueci');
		
		this.startBtn = this.add.sprite(390, 420, 'voltar').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('esqueci_senha','login'); });
		
	}
	update ()
	{	
		
	}
}