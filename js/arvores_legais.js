class arvores_legais extends Phaser.Scene {
	constructor ()
	{
		super({key: 'arvores_legais'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
		
    }
    preload ()
	{
		
        this.load.image('arvores_legais', 'assets/arvores_legais.png');
        this.load.image('para_centro', 'assets/para_centro.png');
        this.load.image('para_rio_legal', 'assets/para_rio_legal.png');
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 22, frameHeight: 31 });
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 44, frameHeight: 62 });
	}
	create ()
	{
        this.add.image(640, 360, 'arvores_legais');

        if (personagem == 1){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_1');
		}
		else if (personagem == 2){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_2');
		}
		this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
		this.player.setPosition(1000,650);
        //  Eventos do teclado
		
		this.cursors = this.input.keyboard.createCursorKeys();
        
        this.para_centro = this.physics.add.staticGroup();
		
		this.para_centro.create(1016,715, 'para_centro');
		
        this.physics.add.overlap(this.player, this.para_centro, this.entrarCentro, null, this);

        this.para_rio_legal = this.physics.add.staticGroup();
		
		this.para_rio_legal.create(10,246, 'para_rio_legal');
		
        this.physics.add.overlap(this.player, this.para_rio_legal, this.entrarRio_legal, null, this);
    }

    entrarCentro(player, para_centro) {
		game.scene.switch('arvores_legais','loja');
		player.setPosition(1015,635);
	}

    entrarRio_legal(player, para_rio_legal) {
		
		player.setPosition(10,200);
		game.scene.switch('arvores_legais','rio_legal');
		
	}
    update ()
	{	
        if (this.cursors.left.isDown)
		{
			this.player.setVelocityX(-200);
			this.player.setVelocityY(0);
			this.player.anims.play('left', true);
		}
		else if (this.cursors.right.isDown)
		{
			this.player.setVelocityX(200);
			this.player.setVelocityY(0);
			this.player.anims.play('right', true);
		}
		else if (this.cursors.up.isDown)
		{
			this.player.setVelocityY(-200);
			this.player.setVelocityX(0);
			this.player.anims.play('turn', true);
		}
		else if (this.cursors.down.isDown)
		{
			this.player.setVelocityY(200);
			this.player.setVelocityX(0);
			this.player.anims.play('turn', true);
		}
		else
		{
			this.player.setVelocityX(0);
			this.player.setVelocityY(0);
			this.player.anims.play('turn');
		}
		
	}
}