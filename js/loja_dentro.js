class loja_dentro extends Phaser.Scene {
	constructor ()
	{
		super({key: 'loja_dentro'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
	}
	
	preload ()
	{
		this.load.image('lojinha', 'assets/lojinha.png');
		this.load.image('lojinha_hitbox1', 'assets/lojinha_hitbox1.png');
		this.load.image('lojinha_hitbox2', 'assets/lojinha_hitbox2.png');
		this.load.image('lojinha_hitbox3', 'assets/lojinha_hitbox3.png');
		this.load.image('sair_loja', 'assets/sair_loja.png');
		this.load.image('item1', 'assets/comprar_item_1.png');
		this.load.image('item2', 'assets/comprar_item_2.png');
		this.load.image('item3', 'assets/comprar_item_3.png');
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 44, frameHeight: 62 });
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 44, frameHeight: 62 });
	}

	create ()
	{

		this.add.image(640, 360, 'lojinha');
		
		this.sair_loja = this.physics.add.staticGroup();
		this.sair_loja.create(574, 645, 'sair_loja');
		
		if (personagem == 1){
	
			this.player = this.physics.add.sprite(665, 560, 'protagonista_1');
		}
		else if (personagem == 2){
	
			this.player = this.physics.add.sprite(665, 560, 'protagonista_2');
		}
		
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		this.player.setPosition(665,560);
		
		//Hitbox para compra de itens
		
		this.startBtn = this.add.sprite(481, 290, 'item1').setInteractive();
		this.startBtn.on('pointerdown', function (event) {
			
			if (totalMoedas >= 50){
				pularPergunta = pularPergunta + 1; 
				totalMoedas = totalMoedas - 50;
				carregarMoeda();
			}else{
				
			}
		});
		
		this.startBtn = this.add.sprite(795, 290, 'item2').setInteractive();
		this.startBtn.on('pointerdown', function (event) {
			
			if (totalMoedas >= 75){
				segundaChance = segundaChance + 1; 
				totalMoedas = totalMoedas - 75;
				carregarMoeda();
			}else{
				
			}
		});
		
		this.startBtn = this.add.sprite(639, 290, 'item3').setInteractive();
		this.startBtn.on('pointerdown', function (event) {
		
			if (totalMoedas >= 25){
				bomba = bomba + 1;
				totalMoedas = totalMoedas - 25;
				carregarMoeda();
			}else{
				
			}
		});
		
		//Hitboxes
		
		this.lojinha_hitbox1 = this.physics.add.staticGroup();
		
		this.lojinha_hitbox1.create(451, 607, 'lojinha_hitbox1');
		
		this.lojinha_hitbox1.create(831, 607, 'lojinha_hitbox1');
		
		this.physics.add.collider(this.player, this.lojinha_hitbox1);
		
		this.lojinha_hitbox2 = this.physics.add.staticGroup();
		
		this.lojinha_hitbox2.create(670, 395, 'lojinha_hitbox2');
		
		this.physics.add.collider(this.player, this.lojinha_hitbox2);
		
		this.lojinha_hitbox3 = this.physics.add.staticGroup();
		
		this.lojinha_hitbox3.create(325, 500, 'lojinha_hitbox3');
		
		this.lojinha_hitbox3.create(945, 500, 'lojinha_hitbox3');
		
		this.physics.add.collider(this.player, this.lojinha_hitbox3);
		
		//  The score
		//this.scoreText = this.add.text(970, 9, '0', { fontSize: '32px', fill: '#fff' });
		
		this.physics.add.overlap(this.player, this.sair_loja, this.sairLoja, null, this);
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
	}
	
	sairLoja(player, sair_loja) {
		
		player.setPosition(665,560);
		game.scene.switch('loja_dentro','loja');
		
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