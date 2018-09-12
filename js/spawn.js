class spawn extends Phaser.Scene {
	constructor ()
	{
		super({key: 'spawn'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
	}
	
	preload ()
	{
		
		this.load.image('spawn', 'assets/spawn.png');
		this.load.image('hitbox_spawn1', 'assets/hitbox_spawn1.png');
		this.load.image('hitbox_spawn2', 'assets/hitbox_spawn2.png');
		this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 42 });
		
	}
	
	create ()
	{
	
		this.add.image(640, 360, 'spawn');
 			
		this.player = this.physics.add.sprite(665, 490, 'dude');
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		this.player.setPosition(1000,150);
	
	
		//  The score
		//this.scoreText = this.add.text(970, 9, '0', { fontSize: '32px', fill: '#fff' });
		
		// Hitboxes
		
		this.hitbox_spawn1 = this.physics.add.staticGroup();
		
		this.hitbox_spawn1.create(100, 180, 'hitbox_spawn1');
		
		this.physics.add.collider(this.player, this.hitbox_spawn1);
		
		//Mudar de �rea
		
		this.hitbox_spawn2 = this.physics.add.staticGroup();
		
		this.hitbox_spawn2.create(1020, 60, 'hitbox_spawn2');
		
		this.physics.add.overlap(this.player, this.hitbox_spawn2, this.entrarLoja, null, this);
		
		//Cursors
		
		this.cursors = this.input.keyboard.createCursorKeys(); 
	}
	
	entrarLoja(player, hitbox_spawn2){
		
		player.setPosition(1000,150);
		game.scene.switch('spawn','loja');
		
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