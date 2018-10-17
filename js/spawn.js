class spawn extends Phaser.Scene {
	constructor ()
	{
		super({key: 'spawn'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
		var npc2;
	}
	
	preload ()
	{
		
		this.load.image('spawn', 'assets/spawn.png');
		this.load.image('hitbox_spawn1', 'assets/hitbox_spawn1.png');
		this.load.image('hitbox_spawn2', 'assets/hitbox_spawn2.png');
		this.load.image('moeda', 'assets/moeda.png');
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 22, frameHeight: 31 });
		this.load.image('npc2', 'assets/npc2.png');
		this.load.image('arvore1', 'assets/arvore1.png');
		this.load.image('arvore2', 'assets/arvore1.png');
	}
	
	create ()
	{
	
		this.add.image(640, 360, 'spawn');
 			
		this.player = this.physics.add.sprite(665, 490, 'protagonista_2');
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		this.player.setPosition(1000,150);
	
	
		//  The score
		//this.scoreText = this.add.text(970, 9, '0', { fontSize: '32px', fill: '#fff' });
		
		//Moedas

		this.moedas = this.physics.add.sprite(795, 350, 'moeda');
		
		this.physics.add.overlap(this.player, this.moedas, this.coletaMoedas, null, this);

		// Hitboxes
		
		this.hitbox_spawn1 = this.physics.add.staticGroup();
		
		this.hitbox_spawn1.create(100, 180, 'hitbox_spawn1');
		
		this.physics.add.collider(this.player, this.hitbox_spawn1);
		
		//Mudar de �rea
		
		this.hitbox_spawn2 = this.physics.add.staticGroup();
		
		this.hitbox_spawn2.create(1020, 60, 'hitbox_spawn2');
		
		this.physics.add.overlap(this.player, this.hitbox_spawn2, this.entrarLoja, null, this);
		
		//Vilão	
		this.npc2 = this.physics.add.sprite(205, 230, 'npc2');
		
		this.physics.add.overlap(this.player, this.npc2, this.interagirVilao, null, this);
		
		//Cursors
		
		this.cursors = this.input.keyboard.createCursorKeys(); 
	
	    //arvores fundo
		
		this.arvore1 = this.physics.add.staticGroup();
		
		this.arvore1.create(1050, 475, 'arvore1');
		
		//arvores fundo
		
		this.arvore2 = this.physics.add.staticGroup();
		
		this.arvore2.create(75, 200, 'arvore2');
		
	}
	
	interagirVilao(player, npc2){
		if (juju == 0){
			player.setPosition(245,275);
			game.scene.switch('spawn','teste4');
		}
	}
	
	entrarLoja(player, hitbox_spawn2){
		
		player.setPosition(1000,150);
		game.scene.switch('spawn','loja');
		
	}

	coletaMoedas(){
		if (spawnObj.moedas.visible == true){
			spawnObj.moedas.setVisible(false);
			totalMoedas = totalMoedas + 10;
			carregarMoeda();
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