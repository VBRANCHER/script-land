class login extends Phaser.Scene {
	constructor ()
	{
		super({key: 'login'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('login', 'assets/login.png');
		this.load.image('esqueci_senha', 'assets/esqueci_senha.png');
		this.load.image('logar', 'assets/logar.png');
		
	}

	create ()
	{
		
		this.add.image(640, 360, 'login');
		
		this.startBtn = this.add.sprite(544, 464, 'esqueci_senha').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('login','esqueci_senha'); });
		
		this.startBtn = this.add.sprite(748, 464, 'logar').setInteractive();
		this.startBtn.on('pointerdown', function (event) {game.scene.switch('login','lugar_legal'); });
		
	}
	update ()
	{	
		
	}
}