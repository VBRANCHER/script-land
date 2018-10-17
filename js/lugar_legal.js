class lugar_legal extends Phaser.Scene {
	constructor ()
	{
		super({key: 'lugar_legal'});
		var gameOver = false;
		var player;
		var cursors;
		var score = 0;
		var posicao = 0;
		
	}
	
	preload ()
	{
		this.load.image('lugar_legal', 'assets/lugar_legal.png');
		this.load.image('hitbox_cerca_horizontal', 'assets/hitbox_cerca_horizontal.png');
		this.load.image('hitbox_cerca_vertical', 'assets/hitbox_cerca_vertical.png');
		this.load.image('cerca_grande_horizontal', 'assets/cerca_grande_horizontal.png');
		this.load.image('para_loja', 'assets/para_loja.png');
		this.load.image('moeda', 'assets/moeda.png');
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 44, frameHeight: 62 });
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 44, frameHeight: 62 });
		this.load.image('arvore1', 'assets/arvore1.png');
	}

	create ()
	{
		this.add.image(640, 360, 'lugar_legal');
		
		if (personagem == 1){
	
			this.player = this.physics.add.sprite(100, 170, 'protagonista_1');
		}
		else if (personagem == 2){
	
			this.player = this.physics.add.sprite(100, 170, 'protagonista_2');
		}
		
		this.player.setBounce(0);
		this.player.setCollideWorldBounds(true);
		
		// Moedas
		
		this.moedas =  this.physics.add.sprite(252, 162, 'moeda');
		this.moedas2 =  this.physics.add.sprite(952, 500, 'moeda');
		
		this.physics.add.overlap(this.player, this.moedas, this.coletaMoedas, null, this);
		this.physics.add.overlap(this.player, this.moedas2, this.coletaMoedas2, null, this);
		
		
		
		
		// The score
		//this.scoreText = this.add.text(970, 9, '0', { fontSize: '32px', fill: '#fff' });
		
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
		
		
		// Animações do personagem 1
		
		if (personagem == 1){

			this.anims.create({
				key: 'turn',
				frames: [ { key: 'protagonista_1', frame: 4 } ],
				frameRate: 20
			});
			
			this.anims.create({
				key: 'left',
				frames: this.anims.generateFrameNumbers('protagonista_1', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});
			
			this.anims.create({
				key: 'up',
				frames: [ { key: 'protagonista_1', frame: 9 } ],
				frameRate: 20
			});

			this.anims.create({
				key: 'right',
				frames: this.anims.generateFrameNumbers('protagonista_1', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
			
			this.anims.create({
				key: 'rightStop',
				frames: [ { key: 'protagonista_1', frame: 7 } ],
				frameRate: 20
			});
			
			this.anims.create({
				key: 'leftStop',
				frames: [ { key: 'protagonista_1', frame: 0 } ],
				frameRate: 20
			});
		}
		
		// Animações do personagem 2
		
		if (personagem == 2) {
		
			this.anims.create({
				key: 'turn',
				frames: [ { key: 'protagonista_2', frame: 4 } ],
				frameRate: 20
			});
			
			this.anims.create({
				key: 'left',
				frames: this.anims.generateFrameNumbers('protagonista_2', { start: 0, end: 3 }),
				frameRate: 10,
				repeat: -1
			});
			
			this.anims.create({
				key: 'up',
				frames: [ { key: 'protagonista_2', frame: 9 } ],
				frameRate: 20
			});
			
			this.anims.create({
				key: 'right',
				frames: this.anims.generateFrameNumbers('protagonista_2', { start: 5, end: 8 }),
				frameRate: 10,
				repeat: -1
			});
			
			this.anims.create({
				key: 'rightStop',
				frames: [ { key: 'protagonista_2', frame: 7 } ],
				frameRate: 20
			});
			
			this.anims.create({
				key: 'leftStop',
				frames: [ { key: 'protagonista_2', frame: 0 } ],
				frameRate: 20
			});

		}
		
		this.player.anims.play('turn', true);
		
		// Próxima Área
		
		this.para_loja = this.physics.add.staticGroup();
		
		this.para_loja.create(1270, 543, 'para_loja');
		
		this.physics.add.overlap(this.player, this.para_loja, this.paraLoja, null, this);
		
		//arvores fundo
		
		this.arvore1 = this.physics.add.staticGroup();
		
		this.arvore1.create(470, 400, 'arvore1');
		
		//  Eventos do teclado
		
		this.cursors = this.input.keyboard.createCursorKeys();
		
	}
	
	paraLoja(player, para_loja) {
		player.setPosition(1220,543);
		game.scene.switch('lugar_legal','loja');
	}
	
	coletaMoedas(){
		if (lugar_legalObj.moedas.visible == true){
			lugar_legalObj.moedas.setVisible(false);
			totalMoedas = totalMoedas + 10;
			carregarMoeda();
		}
	}
	coletaMoedas2(){
		if (lugar_legalObj.moedas2.visible == true){
			lugar_legalObj.moedas2.setVisible(false);
			totalMoedas = totalMoedas + 10;
			carregarMoeda();
			//lugar_legalObj.moedasText.setText('Moedas: ' + totalMoedas);
		}
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