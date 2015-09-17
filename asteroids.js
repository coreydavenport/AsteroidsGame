var Game = (function(){
	function Game(){
		//console.log("Game created");
	}
	Game.prototype.updateAll = function(){
		
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


//Tracks keypress
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