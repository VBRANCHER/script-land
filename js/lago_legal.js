class lago_legal extends Phaser.Scene {
	constructor ()
	{
		super({key: 'lago_legal'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
		var npc3;
	}
	
	preload ()
	{
		
		this.load.image('lago_legal', 'assets/lago_legal.png');
		this.load.image('para_rio_legal_22', 'assets/para_rio_legal_22.png');
		this.load.image('moeda', 'assets/moeda.png');
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 22, frameHeight: 31 });
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 22, frameHeight: 31 });
		this.load.image('npc3', 'assets/npc3.png');

	}
	
	create ()
	{
	
		this.add.image(640, 360, 'lago_legal');
 			
		this.player = this.physics.add.sprite(665, 490, 'protagonista_2');
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		this.player.setPosition(380,650);
	
		//Moedas

		this.moedas = this.physics.add.sprite(415, 400, 'moeda');
		
		this.physics.add.overlap(this.player, this.moedas, this.coletaMoedas, null, this);
		
		
		//Vilão	
		this.npc3 = this.physics.add.sprite(415, 230, 'npc3');
		
		this.physics.add.overlap(this.player, this.npc3, this.interagirVilao, null, this);
		
		//Cursors
		
		this.cursors = this.input.keyboard.createCursorKeys(); 
	
		this.para_rio_legal_22 = this.physics.add.staticGroup();
		
		this.para_rio_legal_22.create(415, 710, 'para_rio_legal_22');
		
		this.physics.add.overlap(this.player, this.para_rio_legal_22, this.entrarRio_legal_22, null, this);
		
	}
	
	interagirVilao(player, npc3){
		if (john == 0){
			player.setPosition(415,340);
			game.scene.switch('lago_legal','teste8');
		}
	}
	
	entrarRio_legal_22(player, para_rio_legal_2) {
		
		game.scene.switch('lago_legal','rio_legal_2');
		player.setPosition(405,625);
	}
	
	coletaMoedas(){
		if (lago_legalObj.moedas.visible == true){
			lago_legalObj.moedas.setVisible(false);
			totalMoedas = totalMoedas + 10;
			carregarMoeda();
		}
	}

	update ()
	{	
		
		if (john == 1){
			lago_legalObj.npc3.setVisible(false);
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