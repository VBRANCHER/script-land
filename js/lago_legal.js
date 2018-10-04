class lago_legal extends Phaser.Scene {
	constructor ()
	{
		super({key: 'lago_legal'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
		var npc2;
	}
	
	preload ()
	{
		
		this.load.image('lago_legal', 'assets/lago_legal.png');
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 22, frameHeight: 31 });
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 22, frameHeight: 31 });
		this.load.image('npc2', 'assets/npc2.png');

	}
	
	create ()
	{
	
		this.add.image(640, 360, 'lago_legal');
 			
		this.player = this.physics.add.sprite(665, 490, 'protagonista_2');
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		this.player.setPosition(1000,150);
	

		
		
		//Vilão	
		this.npc2 = this.physics.add.sprite(205, 230, 'npc2');
		
		this.physics.add.overlap(this.player, this.npc2, this.interagirVilao, null, this);
		
		//Cursors
		
		this.cursors = this.input.keyboard.createCursorKeys(); 
	
	}
	
	interagirVilao(player, npc2){
		if (juju == 0){
			player.setPosition(245,275);
			game.scene.switch('lago_legal','teste4');
		}
	}
	

	
	update ()
	{	
		
		if (juju == 1){
			spawnObj.npc2.setVisible(false);
		}
		
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