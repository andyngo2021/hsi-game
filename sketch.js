let s_width = 1000, s_height = 600;
let person, philip, jessica, andrea, eric, buttons;
let small_icon, heart_img, game_over_text, main_background, main_menu_background, htp_background, about_bg, golden_border;
let char_x, char_y;

let index, characters;
function preload() {
	small_icon = loadImage('Game Files/Images/Etc/small_icon.png');
	heart_img = loadImage('Game Files/Images/Etc/heart.png');
	game_over_text = loadImage('Game Files/Images/Etc/gameover.png');
	main_background = loadImage('Game Files/Images/Backgrounds/char_select.png');
	main_menu_background = loadImage('Game Files/Images/Backgrounds/main_menu_bg.png');
	htp_background = loadImage('Game Files/Images/Backgrounds/htp.png');
	about_bg = loadImage('Game Files/Images/Backgrounds/about.png');
	golden_border = loadImage('Game Files/Images/Borders/gold_border.png');
	philip = {
		background: loadImage('Game Files/Images/Backgrounds/philip_bg.png'),
		char: loadImage('Game Files/Images/Leads/philip.png'),
		obstacle: loadImage('Game Files/Images/Obstacles/philip_obstacle.png'),
		catch: loadImage('Game Files/Images/Catch/philip_catch.png'),
		inactive: loadImage('Game Files/Images/Borders/philip_border_inactive.png'),
		active: loadImage('Game Files/Images/Borders/philip_border_active.png')
	};
	jessica = {
		background: loadImage('Game Files/Images/Backgrounds/jessica_bg.png'),
		char: loadImage('Game Files/Images/Leads/jessica.png'),
		obstacle: loadImage('Game Files/Images/Obstacles/jessica_obstacle.png'),
		catch: loadImage('Game Files/Images/Catch/jessica_catch.png'),
		inactive: loadImage('Game Files/Images/Borders/jessica_border_inactive.png'),
		active: loadImage('Game Files/Images/Borders/jessica_border_active.png')
	};
	andrea = {
		background: loadImage('Game Files/Images/Backgrounds/andrea_bg.png'),
		char: loadImage('Game Files/Images/Leads/andrea.png'),
		obstacle: loadImage('Game Files/Images/Obstacles/andrea_obstacle.png'),
		catch: loadImage('Game Files/Images/Catch/andrea_catch.png'),
		inactive: loadImage('Game Files/Images/Borders/andrea_border_inactive.png'),
		active: loadImage('Game Files/Images/Borders/andrea_border_active.png')
	};
	eric = {
		background: loadImage('Game Files/Images/Backgrounds/eric_bg.png'),
		char: loadImage('Game Files/Images/Leads/eric.png'),
		obstacle: loadImage('Game Files/Images/Obstacles/eric_obstacle.png'),
		catch: loadImage('Game Files/Images/Catch/eric_catch.png'),
		inactive: loadImage('Game Files/Images/Borders/eric_border_inactive.png'),
		active: loadImage('Game Files/Images/Borders/eric_border_active.png')
	};
	buttons = {
		play_again: [loadImage('Game Files/Buttons/play_again_inactive.png'), loadImage('Game Files/Buttons/play_again_active.png')],
		quit: [loadImage('Game Files/Buttons/quit_inactive.png'), loadImage('Game Files/Buttons/quit_active.png')],
		menu: [loadImage('Game Files/Buttons/menu_inactive.png'), loadImage('Game Files/Buttons/menu_active.png')],
		start: [loadImage('Game Files/Buttons/start_inactive.png'), loadImage('Game Files/Buttons/start_active.png')],
		main_start: [loadImage('Game Files/Buttons/main_start_inactive.png'), loadImage('Game Files/Buttons/main_start_active.png')],
		htp: [loadImage('Game Files/Buttons/htp_inactive.png'), loadImage('Game Files/Buttons/htp_active.png')],
		about: [loadImage('Game Files/Buttons/about_inactive.png'), loadImage('Game Files/Buttons/about_active.png')],
		back: [loadImage('Game Files/Buttons/about_inactive.png'), loadImage('Game Files/Buttons/about_active.png')]
	};

}

let obj;
let fallingObjects;
let catch_obj;


function initializeObjects() {
	let numObjects = 3;
  	fallingObjects = [];
  	for (let k=0; k<numObjects; k++) {
  		let x = random(s_width-(person.obstacle.width));
  		let y = -person.obstacle.height;
  		let speed = random(5,10);
  		fallingObjects[k] = new FallingObject(x, y, speed, person.obstacle);
  	}
  	catch_obj = new FallingObject(random(s_width-(person.catch.width)), -random(person.catch.height+400), random(5,10), person.catch);
}

function setup() {
  createCanvas(s_width, s_height);
  //background(0);
  characters = [philip, jessica, andrea, eric];
  index = 0;
  person = characters[index];
  initializeObjects();
  // obj = new FallingObject(random(s_width-(person.obstacle.width)), -person.obstacle.height, 5);
  
  
  char_x = (s_width-person.char.width)/2;
  char_y = s_height-person.char.height;
  // Loading in Images
  
}

function mouseClicked() {
	
	if (index < characters.length-1) {
		index++;
	} else {
		index = 0;
	}
	person = characters[index];
	initializeObjects();

}



function draw() {
	image(person.background, 0, 0);

	let char_speed = 15;
	image(person.char, char_x, char_y);
	if ((keyIsDown(LEFT_ARROW) || keyIsDown(65)) && char_x > 0) {
		char_x -= char_speed;
	}
	if ((keyIsDown(RIGHT_ARROW) || keyIsDown(68)) && (char_x+person.char.width) < s_width) {
		char_x += char_speed;
	}

	for (let i=0; i<fallingObjects.length; i++) {
		fallingObjects[i].move();
		fallingObjects[i].show();
	}
	catch_obj.move();
	catch_obj.show();

}


class FallingObject {
	constructor(x, y, speed, object_img) {
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.object_img = object_img;

	}
	move() {
		this.y += this.speed;
		if (this.y > s_height) {
			this.y = -person.obstacle.height;
			this.x = random(s_width-person.obstacle.width);
			this.speed = random(5,10);
		}
	}
	show() {
		image(this.object_img, this.x, this.y);
	}
}