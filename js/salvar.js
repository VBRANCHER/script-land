class salvar extends Phaser.Scene {
	constructor ()
	{
		super({key: 'salvar'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('salvar', 'assets/salvar.png');
		this.load.image('btSim', 'assets/btSim.png');
		this.load.image('btNao', 'assets/btNao.png');
	}

	create ()
	{

		this.add.image(640, 360, 'salvar');
		
		this.startBtn = this.add.sprite(565, 370, 'btSim').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('salvar','lugar_legal'); });
		
		this.startBtn = this.add.sprite(705, 370, 'btNao').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('salvar','lugar_legal'); });
		
	}
	update ()
	{	
		
	}
}