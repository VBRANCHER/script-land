class rio_legal_2 extends Phaser.Scene {
	constructor ()
	{
		super({key: 'rio_legal_2'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
		
    }
    preload ()
	{
		
		this.load.image('rio_legal_2', 'assets/rio_legal_2.png');
		this.load.image('hitbox_rio_legal_2', 'assets/hitbox_rio_legal_2.png');
		this.load.image('hitbox_rio_legal_2', 'assets/hitbox_rio_legal_2.png');
		this.load.image('para_lago_legal', 'assets/para_lago_legal.png');
		this.load.image('para_rio_legal2', 'assets/para_rio_legal2.png');
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 22, frameHeight: 31 });
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 44, frameHeight: 62 });
	}
	create ()
	{
        this.add.image(640, 360, 'rio_legal_2');

        if (personagem == 1){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_1');
		}
		else if (personagem == 2){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_2');
		}
		this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
		this.player.setPosition(1200, 500);
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
		this.para_lago_legal = this.physics.add.staticGroup();
		
		this.para_lago_legal.create(550, 15, 'para_lago_legal');
		
		this.physics.add.overlap(this.player, this.para_lago_legal, this.entrarLago_legal, null, this);

		this.para_rio_legal2 = this.physics.add.staticGroup();
		
		this.para_rio_legal2.create(1270, 510, 'para_rio_legal2');
		
		this.physics.add.overlap(this.player, this.para_rio_legal2, this.entrarRio_legal2, null, this);

		this.hitbox_rio_legal_2 = this.physics.add.staticGroup();
		
		this.hitbox_rio_legal_2.create(875, 605, 'hitbox_rio_legal_2');
		
		this.physics.add.collider(this.player, this.hitbox_rio_legal_2);

		this.hitbox_rio_legal_2 = this.physics.add.staticGroup();
		
		this.hitbox_rio_legal_2.create(1050, 410, 'hitbox_rio_legal_2');
		
		this.physics.add.collider(this.player, this.hitbox_rio_legal_2);
	}
	
	entrarRio_legal2(player, para_rio_legal) {
		
		game.scene.switch('rio_legal_2','rio_legal');
		player.setPosition(1200, 500);

	}

	entrarLago_legal(player, para_lago_legal) {
		
		game.scene.switch('rio_legal_2','lago_legal');
		player.setPosition(540,100);

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