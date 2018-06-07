var computer = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var pink = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var amethyst = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var emerald = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var sapphire = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var totalScore = 0;

function shuffleCrystalValues(){
	pink = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	amethyst = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	emerald = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	sapphire = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}

function gamePlay(){
	if(totalScore === computer){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You Win!');
		computer = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computer);
		totalScore = 0;
		$('#score-counter').text(totalScore);
		shuffleCrystalValues();

	} else if(totalScore > computer){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You Lose!');
		computer = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computer);
		totalScore = 0;
		$('#score-counter').text(totalScore);
		shuffleCrystalValues();
	}
}

$('#random-number').text(computer);

$('#pink').on('click', function(){
	totalScore += pink;
	$('#score-counter').text(totalScore);
	gamePlay();
});

$('#amethyst').on('click', function(){
	totalScore += amethyst;
	$('#score-counter').text(totalScore);
	gamePlay();
});

$('#sapphire').on('click', function(){
	totalScore += sapphire;
	$('#score-counter').text(totalScore);
	gamePlay();
});

$('#emerald').on('click', function(){
	totalScore += emerald;
	$('#score-counter').text(totalScore);
	gamePlay();
});