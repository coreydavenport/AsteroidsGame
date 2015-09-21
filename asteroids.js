// Once script is loaded, instantiate Game
window.addEventListener('load', function(){
	var game = new Game();
})

var Game = (function(){
	function Game(){
		//console.log("Game created");
		Key.init();
		this.updateAll();
		this.screen = document.querySelector('#canvas');
		this.scoreText = document.querySelector('#score');
		this.score = 0;
		this.player = null;
		this.rocks = [];
		this.imgs = [];
		Game.ctx = this.screen.getContext('2d'); //access canvas
		this.loadAssets(['player.png','rock1.png','sf1.jpg']); //forcing assets to load in this specific order
	}
	// load assets prototype here



	Game.prototype.updateAll = function(){
		(function drawFrame(){
			window.requestAnimationFrame(drawFrame);
			//console.log(Key.keys);
		})()
	};
	return Game;
})();

var Sprite = (function(){
	function Sprite(){
		//console.log("Sprite created");
	}
	return Sprite;
})();

var Player = (function(){
	
	function Player(){
		//console.log("Player created");
		Player.prototype = Object.create(Sprite.prototype);
		Sprite.call(this, img);
	}
	return Player;
})();

var Rock = (function(){
	
	function Rock(){
		//console.log("Rock created");
		Rock.prototype = Object.create(Sprite.prototype);
		Sprite.call(this, img);
	}
	return Rock;
})();


//Tracks keypress. Adds keys to array as they are pressed
var Key = (function(){
	function Key(){
		//console.log("Key created");
	}

	Key.init = function(){
		Key.keys = [];
		window.addEventListener('keydown', Key.onKeyDown);
		window.addEventListener('keyup', Key.onKeyUp);
	};

	Key.onKeyDown = function(e){
		Key.keys[e.keyCode] = 1;
	};

	Key.onKeyUp = function(e){
		Key.keys[e.keyCode] = 0;
	};
	return Key;
})();

var Bullet = (function(){
	function Bullet(){
		//console.log("Bullet created");
	}
	return Bullet;
})();