class loja extends Phaser.Scene {
	constructor ()
	{
		super({key: 'loja'});
		var player;
		var cursors;
		var loja;
		var gameOver = false;
		var score = 0;
		var npc;
		var posicao = 0;
	}
	
	preload ()
	{
		
		this.load.image('centro', 'assets/centro.png');
		this.load.image('hitbox1', 'assets/hitbox1.png');
		this.load.image('hitbox2', 'assets/hitbox2.png');
		this.load.image('hitbox3', 'assets/hitbox3.png');
		this.load.image('hitbox4', 'assets/hitbox4.png');
		this.load.image('hitbox5', 'assets/hitbox5.png');
		this.load.image('hitbox6', 'assets/hitbox6.png');
		this.load.image('hitbox7', 'assets/hitbox7.png');
		this.load.image('loja', 'assets/loja.png');
		this.load.image('moeda', 'assets/moeda.png');
		this.load.image('para_lugar_legal', 'assets/para_lugar_legal.png');
		this.load.image('para_arvores_legais', 'assets/para_arvores_legais.png');
		this.load.image('npc', 'assets/npc.png');
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 44, frameHeight: 62 });
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 44, frameHeight: 62 });
	}

	create ()
	{
		this.add.image(640, 360, 'centro');
		
		if (personagem == 1){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_1');
		}
		else if (personagem == 2){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_2');
		}
		
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);

		//Moedas

		this.moedas = this.physics.add.sprite(920, 490, 'moeda');
		
		this.physics.add.overlap(this.player, this.moedas, this.coletaMoedas, null, this);

		 //  The score
		//this.scoreText = this.add.text(970, 9, '0', { fontSize: '32px', fill: '#fff' });
		
		// Criar a loja como objeto com colisão estático
		this.loja = this.physics.add.staticGroup();
		
		this.loja.create(567, 380, 'loja');
		
		this.physics.add.overlap(this.player, this.loja, this.entrarLoja, null, this);
		// Hitboxes
		
		this.hitbox1 = this.physics.add.staticGroup();
		
		this.hitbox1.create(262, 410, 'hitbox1');
		
		this.physics.add.collider(this.player, this.hitbox1);
		
		this.hitbox2 = this.physics.add.staticGroup();
		
		this.hitbox2.create(733, 410, 'hitbox2');
		
		this.physics.add.collider(this.player, this.hitbox2);
		
		this.hitbox3 = this.physics.add.staticGroup();
		
		this.hitbox3.create(430, 528, 'hitbox3');
		
		this.physics.add.collider(this.player, this.hitbox3);
		
		this.hitbox4 = this.physics.add.staticGroup();
		
		this.hitbox4.create(953, 390, 'hitbox4');
		
		this.physics.add.collider(this.player, this.hitbox4);
		
		this.hitbox5 = this.physics.add.staticGroup();
		
		this.hitbox5.create(854, 625, 'hitbox5');
		
		this.physics.add.collider(this.player, this.hitbox5);
		
		this.hitbox6 = this.physics.add.staticGroup();
		
		this.hitbox6.create(853, 215, 'hitbox6');
		
		this.physics.add.collider(this.player, this.hitbox6);
		
		// Mudar de área
		
		this.hitbox7 = this.physics.add.staticGroup();
		
		this.hitbox7.create(905, 695, 'hitbox7');
		
		this.physics.add.overlap(this.player, this.hitbox7, this.entrarSpawn, null, this);
		
		this.para_lugar_legal = this.physics.add.staticGroup();
		
		this.para_lugar_legal.create(10, 492, 'para_lugar_legal');
		
		this.physics.add.overlap(this.player, this.para_lugar_legal, this.entrarLugar_legal, null, this);
		
		this.para_arvores_legais = this.physics.add.staticGroup();
		
		this.para_arvores_legais.create(905, 25, 'para_arvores_legais');
		
		this.physics.add.overlap(this.player, this.para_arvores_legais, this.entrarArvores_legais, null, this);
		

		//Vilão
		this.npc = this.physics.add.sprite(900, 160, 'npc');
		
		this.physics.add.overlap(this.player, this.npc, this.interagirVilao, null, this);

		//  Eventos do teclado
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
		
		
		
	}
	

	interagirVilao(player, npc){
		if (jean == 0){
			player.setPosition(900,275);
			game.scene.switch('loja','Teste');
		}
	}
	
	entrarLugar_legal(player, para_lugar_legal) {
		
		player.setPosition(50,490);
		game.scene.switch('loja','lugar_legal');
		
	}

	entrarArvores_legais(player, para_arvores_legais) {

		game.scene.switch('loja','arvores_legais');
		player.setPosition(905, 90);
	}
	
	entrarLoja(player, loja) {
		
		player.setPosition(567,440);
		game.scene.switch('loja','loja_dentro');
		
	}
	
	entrarSpawn(player, hitbox7) {
		
		player.setPosition(900,625);
		game.scene.switch('loja','spawn');
		
	}
	
	coletaMoedas(){
		if (lojaObj.moedas.visible == true){
			lojaObj.moedas.setVisible(false);
			totalMoedas = totalMoedas + 10;
			carregarMoeda();
		}
	}

	update ()
	{	
	
		if (jean == 1){
			lojaObj.npc.setVisible(false);
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


