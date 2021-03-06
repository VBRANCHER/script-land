class arvores_legais extends Phaser.Scene {
	constructor ()
	{
		super({key: 'arvores_legais'});
		var player;
		var cursors;
		var gameOver = false;
		var score = 0;
		var posicao = 0;
    }
    preload ()
	{
		
		this.load.image('arvores_legais', 'assets/arvores_legais.png');
		this.load.image('hitbox_arvores_legais', 'assets/hitbox_arvores_legais.png');
		this.load.image('hitbox_arvores_legais2', 'assets/hitbox_arvores_legais2.png');
		this.load.image('hitbox_arvores_legais3', 'assets/hitbox_arvores_legais3.png');
		this.load.image('hitbox_arvores_legais4', 'assets/hitbox_arvores_legais4.png');
		this.load.image('hitbox_arvores_legais4', 'assets/hitbox_arvores_legais4.png');
		this.load.image('hitbox_arvores_legais5', 'assets/hitbox_arvores_legais5.png');
		this.load.image('hitbox_arvores_legais5', 'assets/hitbox_arvores_legais5.png');
        this.load.image('para_centro', 'assets/para_centro.png');
        this.load.image('para_rio_legal', 'assets/para_rio_legal.png');
		this.load.spritesheet('protagonista_2', 'assets/protagonista_2.png', { frameWidth: 22, frameHeight: 31 });
		this.load.spritesheet('protagonista_1', 'assets/protagonista_1.png', { frameWidth: 44, frameHeight: 62 });
	}
	create ()
	{
        this.add.image(640, 360, 'arvores_legais');

        if (personagem == 1){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_1');
		}
		else if (personagem == 2){
	
			this.player = this.physics.add.sprite(100, 470, 'protagonista_2');
		}
		this.player.setBounce(0);
        this.player.setCollideWorldBounds(true);
		this.player.setPosition(1000,650);
        //  Eventos do teclado
		
		this.cursors = this.input.keyboard.createCursorKeys();
        
        this.para_centro = this.physics.add.staticGroup();
		
		this.para_centro.create(1016,715, 'para_centro');
		
        this.physics.add.overlap(this.player, this.para_centro, this.entrarCentro, null, this);

        this.para_rio_legal = this.physics.add.staticGroup();
		
		this.para_rio_legal.create(10,246, 'para_rio_legal');
		
		this.physics.add.overlap(this.player, this.para_rio_legal, this.entrarRio_legal, null, this);
		
		//hitbox

		this.hitbox_arvores_legais = this.physics.add.staticGroup();
		
		this.hitbox_arvores_legais.create(939, 510, 'hitbox_arvores_legais');
		
		this.physics.add.collider(this.player, this.hitbox_arvores_legais);

		this.hitbox_arvores_legais2 = this.physics.add.staticGroup();
		
		this.hitbox_arvores_legais2.create(1085, 450, 'hitbox_arvores_legais2');
		
		this.physics.add.collider(this.player, this.hitbox_arvores_legais2);

		this.hitbox_arvores_legais3 = this.physics.add.staticGroup();
		
		this.hitbox_arvores_legais3.create(469, 308, 'hitbox_arvores_legais3');
		
		this.physics.add.collider(this.player, this.hitbox_arvores_legais3);

		this.hitbox_arvores_legais4 = this.physics.add.staticGroup();
		
		this.hitbox_arvores_legais4.create(708, 150, 'hitbox_arvores_legais4');
		
		this.physics.add.collider(this.player, this.hitbox_arvores_legais4);

		this.hitbox_arvores_legais4 = this.physics.add.staticGroup();
		
		this.hitbox_arvores_legais4.create(-178, 150, 'hitbox_arvores_legais4');
		
		this.physics.add.collider(this.player, this.hitbox_arvores_legais4);

		this.hitbox_arvores_legais5 = this.physics.add.staticGroup();
		
		this.hitbox_arvores_legais5.create(342, 85, 'hitbox_arvores_legais5');
		
		this.physics.add.collider(this.player, this.hitbox_arvores_legais5);

		this.hitbox_arvores_legais5 = this.physics.add.staticGroup();
		
		this.hitbox_arvores_legais5.create(191, 85, 'hitbox_arvores_legais5');
		
		this.physics.add.collider(this.player, this.hitbox_arvores_legais5);
    }

    entrarCentro(player, para_centro) {
		game.scene.switch('arvores_legais','loja');
		player.setPosition(1015,635);
	}

    entrarRio_legal(player, para_rio_legal) {
		
		game.scene.switch('arvores_legais','rio_legal');
		player.setPosition(80,250);
		
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