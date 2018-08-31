class lugar_legal extends Phaser.Scene {
	constructor ()
	{
		super({key: 'lugar_legal'});
		var gameOver = false;
		var player;
		var cursors;
		var score = 0;
	}
	
	preload ()
	{
		this.load.image('lugar_legal', 'assets/lugar_legal.png');
		this.load.image('hitbox_cerca_horizontal', 'assets/hitbox_cerca_horizontal.png');
		this.load.image('hitbox_cerca_vertical', 'assets/hitbox_cerca_vertical.png');
		this.load.image('cerca_grande_horizontal', 'assets/cerca_grande_horizontal.png');
		this.load.image('Savepoint', 'assets/Savepoint.png');
		this.load.image('para_loja', 'assets/para_loja.png');
		this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 42 });
	}

	create ()
	{
	
		this.add.image(640, 360, 'lugar_legal');
		
		this.player = this.physics.add.sprite(100, 170, 'dude');
		
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		
		// Savepoint
		
		this.Savepoint = this.physics.add.staticGroup();
		this.Savepoint = this.physics.add.sprite(1110, 380, 'Savepoint');
		this.physics.add.overlap(this.player, this.Savepoint, this.Save, null, this);
		
		
		// The score
		this.scoreText = this.add.text(970, 9, '0', { fontSize: '32px', fill: '#fff' });
		
		// Cercas
		
		this.cerca_grande_horizontal = this.physics.add.staticGroup();

		this.hitbox_cerca_horizontal = this.physics.add.staticGroup();
		this.hitbox_cerca_vertical = this.physics.add.staticGroup();
		
		this.hitbox_cerca_horizontal.create(392, 102, 'hitbox_cerca_horizontal');
		this.hitbox_cerca_horizontal.create(178, 270, 'hitbox_cerca_horizontal');
		this.hitbox_cerca_horizontal.create(1102, 650, 'hitbox_cerca_horizontal');
		this.hitbox_cerca_horizontal.create(1350, 450, 'hitbox_cerca_horizontal');
		
		this.hitbox_cerca_vertical.create(888, 180, 'hitbox_cerca_vertical');
		this.hitbox_cerca_vertical.create(661, 480, 'hitbox_cerca_vertical');
		
		this.cerca_grande_horizontal.create(133, 259, 'cerca_grande_horizontal');
		this.cerca_grande_horizontal.create(473, 259, 'cerca_grande_horizontal');
		this.cerca_grande_horizontal.create(812, 636, 'cerca_grande_horizontal');
		this.cerca_grande_horizontal.create(1114, 636, 'cerca_grande_horizontal');
				
		this.physics.add.collider(this.player, this.hitbox_cerca_horizontal);
		this.physics.add.collider(this.player, this.hitbox_cerca_vertical);
		
		// Animações do jogador
		
		this.anims.create({
			key: 'left',
			frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
			frameRate: 10,
			repeat: -1
		});

		this.anims.create({
			key: 'turn',
			frames: [ { key: 'dude', frame: 4 } ],
			frameRate: 20
		});

		this.anims.create({
			key: 'right',
			frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
			frameRate: 10,
			repeat: -1
		});

		// Próxima Área
		
		this.para_loja = this.physics.add.staticGroup();
		
		this.para_loja.create(1270, 543, 'para_loja');
		
		this.physics.add.overlap(this.player, this.para_loja, this.paraLoja, null, this);
		
		
		//  Eventos do teclado
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
	}
	
	Save(player, Savepoint){
		player.setPosition(1110,580);
		game.scene.switch('lugar_legal','salvar');
	}
	
	paraLoja(player, para_loja) {
		player.setPosition(1220,543);
		game.scene.switch('lugar_legal','loja');
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