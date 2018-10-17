class rio_legal extends Phaser.Scene {
	constructor ()
	{
		super({key: 'rio_legal'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
		var posicao = 0;
    }
    preload ()
	{
		
		this.load.image('rio_legal', 'assets/rio_legal.png');
		this.load.image('hitbox_rio_legal', 'assets/hitbox_rio_legal.png');
		this.load.image('hitbox_rio_legal', 'assets/hitbox_rio_legal.png');
		this.load.image('para_arvores_legais_2', 'assets/para_arvores_legais_2.png');
		this.load.image('para_rio_legal_2', 'assets/para_rio_legal_2.png');
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
        
        this.para_arvores_legais_2 = this.physics.add.staticGroup();
		
		this.para_arvores_legais_2.create(1255, 510, 'para_arvores_legais_2');
		
		this.physics.add.overlap(this.player, this.para_arvores_legais_2, this.entrarArvores_legais_2, null, this);

		this.para_rio_legal_2 = this.physics.add.staticGroup();
		
		this.para_rio_legal_2.create(15, 510, 'para_rio_legal_2');
		
		this.physics.add.overlap(this.player, this.para_rio_legal_2, this.entrarRio_legal_2, null, this);
		
		this.hitbox_rio_legal = this.physics.add.staticGroup();
		
		this.hitbox_rio_legal.create(600, 592, 'hitbox_rio_legal');
		
		this.physics.add.collider(this.player, this.hitbox_rio_legal);

		this.hitbox_rio_legal = this.physics.add.staticGroup();
		
		this.hitbox_rio_legal.create(600, 400, 'hitbox_rio_legal');
		
		this.physics.add.collider(this.player, this.hitbox_rio_legal);
    }

    entrarArvores_legais_2(player, para_arvores_legais_2) {
		
		game.scene.switch('rio_legal','arvores_legais');
		player.setPosition(1170, 510);
		
	}

	entrarRio_legal_2(player, para_rio_legal_2) {
		
		game.scene.switch('rio_legal','rio_legal_2');
		player.setPosition(90, 510);
		
	}
    update ()
	{	
        if (this.cursors.left.isDown)
		{
			this.player.setVelocityX(-200);
			this.player.setVelocityY(0);
			this.player.anims.play('left', true);
			this.posicao = 2;
			
		}
		else if (this.cursors.right.isDown)
		{
			this.player.setVelocityX(200);
			this.player.setVelocityY(0);
			this.player.anims.play('right', true);
			this.posicao = 3;
			
		}
		else if (this.cursors.up.isDown)
		{
			this.player.setVelocityY(-200);
			this.player.setVelocityX(0);
			this.player.anims.play('up', true);
			this.posicao = 1;
	
		}
		else if (this.cursors.down.isDown)
		{
			this.player.setVelocityY(200);
			this.player.setVelocityX(0);
			this.player.anims.play('turn', true);
			this.posicao = 0;
			
		}
		else
		{
			this.player.setVelocityX(0);
			this.player.setVelocityY(0);
			if (this.posicao == 0){
				this.player.anims.play('turn', true);
			}
			else if (this.posicao == 1){
				this.player.anims.play('up', true);
			}
			else if (this.posicao == 2){
				this.player.anims.play('leftStop', true);
			}
			else if (this.posicao == 3){
				this.player.anims.play('rightStop', true);
			}
		}
		
	}
}