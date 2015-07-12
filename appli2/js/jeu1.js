$(document).ready(function(e) {
	
	var score = 0;

  //Drag'n'drop
  
  $('#drag_ul img').draggable( {
	containment: '.page_jeu1',
	stack: '#drag_ul',
	cursor: '-webkit-grab',
	revert: 'invalid',
	helper: 'clone'
  });
  
  // lieux - zone drop
  
  //drop chouette
  $('#drop1').droppable( {
	accept: '#drag1',
	hoverClass: 'hovered2',
	drop: dropZone
	
  });
  //drop souris
  $('#drop2').droppable( {
	accept: '#drag6',
	hoverClass: 'hovered2',
	drop: dropZone2
	
  });
  //drop mesange
  $('#drop3').droppable( {
	accept: '#drag4',
	hoverClass: 'hovered2',
	drop: dropZone3
	
  });
  //drop araignée
  $('#drop4').droppable( {
	accept: '#drag3',
	hoverClass: 'hovered2',
	drop: dropZone4
	
  });
  //drop fourmi
  $('#drop5').droppable( {
	accept: '#drag5',
	hoverClass: 'hovered2',
	drop: dropZone5
	
  });
  //drop papillon
  $('#drop6').droppable( {
	accept: '#drag2',
	hoverClass: 'hovered2',
	drop: dropZone6
	
  }); 
  
	function dropZone(event , ui){
		$('#interro6').fadeOut('fast');
		ui.draggable.css({
		'position':'absolute',
		'top': '0px',
		'left': '0px'
		}).appendTo('#drop1').addClass("animated rubberBand").draggable( 'disable' );
		score +=1;
		scoreTotal();
	}
	function dropZone2(event , ui){
		$('#interro3').fadeOut('fast');
		ui.draggable.css({
		'position':'absolute',
		'top': '0px',
		'left': '0px'
		}).appendTo('#drop2').addClass("animated rubberBand").draggable( 'disable' );
		score += 1;
		scoreTotal();
	}
	function dropZone3(event , ui){
		$('#interro5').fadeOut('fast');
		ui.draggable.css({
		'position':'absolute',
		'top': '0px',
		'left': '0px'
		}).appendTo('#drop3').addClass("animated rubberBand").draggable( 'disable' );
		score += 1;
		scoreTotal();
	}
	function dropZone4(event , ui){
		$('#interro4').fadeOut('fast');
		ui.draggable.css({
		'position':'absolute',
		'top': '0px',
		'left': '0px'
		}).appendTo('#drop4').addClass("animated rubberBand").draggable( 'disable' );
		score += 1;
		scoreTotal();
	}
	function dropZone5(event , ui){
		$('#interro1').fadeOut('fast');
		ui.draggable.css({
		'position':'absolute',
		'top': '0px',
		'left': '0px'
		}).appendTo('#drop5').addClass("animated rubberBand").draggable( 'disable' );
		score += 1;
		scoreTotal();
	}
	function dropZone6(event , ui){
		$('#interro2').fadeOut('fast');
		ui.draggable.css({
		'position':'absolute',
		'top': '0px',
		'left': '0px'
		}).appendTo('#drop6').addClass("animated rubberBand").draggable( 'disable' );
		score += 1;
		scoreTotal();
	}
	
	function scoreTotal(){
		if(score >= 6 ){
			$('<a href="jeu2.html"><p>Bravo, tu peux passer au second jeu !</p></a>').css({
			'position':'absolute',
			'bottom': '0px',
			'left': '0px',
			'text-align':'center',
			'font-size':'50px',
			'font-family':'arial',
			'width': '100%',
			'height': 'inherit',
			'padding': '65px 0',
			'display':'none',
			'background-color': '#44FF2E',
			'color':'#fff',
			'text-transform': 'uppercase'	
			}).appendTo('#drag_ul').fadeIn('fast');
		}
	}
  
});// document ready
