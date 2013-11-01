var initializationOrder = [];
var $defaultTile = $('<div class="tile"></div>');

function initGrid() {
	var $grid = $('div#grid').clone();

	for (var y = 0; y < 60; y++) {
		for (var x = 0; x < 90; x++) {
			var tileType = 'land';

			if (x == 45 && y == 30) {
				tileType = 'hero';
			}

			$grid.append($defaultTile.clone().addClass(tileType).attr('x', x).attr('y', y));
			initializationOrder.push({ x: x, y: y});
		}
	}

	$('div#grid').replaceWith($grid);

	/*
	for (var i = 0; i < initializationOrder.length; i++) {
		var changeTileId = Math.floor(Math.random() * initializationOrder.length);
		var tempTile = initializationOrder[i];
		initializationOrder[i] = initializationOrder[changeTileId];
		initializationOrder[changeTileId] = tempTile;
	}

	var i = 0;
	var tilesAtOnce = 15;

	setInterval(function() {
		var coordinateList = initializationOrder.slice(i, i + tilesAtOnce);

		for (coordinateListId in coordinateList) {
			var coordinates = coordinateList[coordinateListId];

			var x = coordinates['x'];
			var y = coordinates['y'];

			var $tile = $('div#grid div.tile[x=' + x + '][y=' + y + ']');

			if (x == 45 && y == 30) {
				$tile.addClass('hero');
			}
			else {
				$tile.addClass('land');
			}

		}

		i += tilesAtOnce;
	}, 1);
	*/
}

function initEvents() {
	var LEFT = 37;
	var UP = 38;
	var RIGHT = 39;
	var DOWN = 40;

	$(window).keydown(function(e) {
		var $currentTile = $('div#grid div.tile.hero');
		var x = parseInt($currentTile.attr('x'));
		var y = parseInt($currentTile.attr('y'));

		switch (e.keyCode) {
			case LEFT:
				if (x == 0) {
					return;
				}

				x -= 1;
				break;

			case UP:
				if (y == 0) {
					return;
				}

				y -= 1;
				break;

			case RIGHT:
				if (x == 89) {
					return;
				}

				x += 1;
				break;

			case DOWN:
				if (y == 59) {
					return;
				}

				y += 1;
				break;

			default:
				return;
		}

		$nextTile = $('div#grid div.tile[x=' + x + '][y=' + y + ']');
		$nextTile.addClass('hero');
		$currentTile.removeClass('hero').addClass('land');
	});
}

$(document).ready(function() {
	initGrid();
	initEvents();

	return;
	$('div.tile').each(function(i, e) {
		var $this = $(e);
		var rgb = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';

		$this.css('background-color', rgb);
	});
});
