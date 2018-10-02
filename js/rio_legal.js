class rio_legal extends Phaser.Scene {
	constructor ()
	{
		super({key: 'rio_legal'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
		
    }
    preload ()
	{
		
        this.load.image('rio_legal', 'assets/rio_legal.png');
        this.load.image('para_arvores_legais2', 'assets/para_arvores_legais2.png');
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 22, frameHeight: 31 });
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 44, frameHeight: 62 });
	}
	create ()
	{
        this.add.image(640, 360, 'rio_legal');

        if (personagem == 1){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_1');
		}
		else if (personagem == 2){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_2');
		}
		this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
		this.player.setPosition(1200, 510);
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.para_arvores_legais2 = this.physics.add.staticGroup();
		
		this.para_arvores_legais2.create(1255, 510, 'para_arvores_legais2');
		
		this.physics.add.overlap(this.player, this.para_arvores_legais2, this.entrarArvores_legais2, null, this);
    }

    entrarArvores_legais2(player, para_arvores_legais2) {
		
		player.setPosition(1200, 510);
		game.scene.switch('rio_legal','arvores_legais');
		
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