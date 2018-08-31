class teste extends Phaser.Scene {
	constructor ()
	{
		super({key: 'Teste'});
		var gameOver = false;
	}
	
	preload ()
	{
		
		this.load.image('pergunta', 'assets/pergunta.png');
		this.load.image('buttonA', 'assets/buttonA.png');
		this.load.image('buttonB', 'assets/buttonB.png');
		this.load.image('buttonC', 'assets/buttonC.png');
		this.load.image('buttonD', 'assets/buttonD.png');
		this.load.image('Protagonista1', 'assets/Protagonista1.png');
		this.load.image('Vilão1', 'assets/Vilão1.png');
	}

	create ()
	{

		this.add.image(640, 360, 'pergunta');
		
		this.add.image(180, 500, 'Protagonista1');
		
		this.add.image(1100, 500, 'Vilão1');
		
		
		
		document.getElementById("divPergunta").style.visibility = "visible";
		
	}
	update ()
	{	
		
	}
}