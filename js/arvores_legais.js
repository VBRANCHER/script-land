class arvores_legais extends Phaser.Scene {
	constructor ()
	{
		super({key: 'arvores_legais'});
		
	}
	
	preload ()
	{
		
		this.load.image('vitoria', 'assets/vitoria.png');
		
	}

	create ()
	{

		this.add.image(640, 360, 'vitoria');
		
		this.startBtn = this.add.sprite(240, 650, 'voltar').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('vitoria','loja'); });
		
	}
	update ()
	{	
		
	}
}