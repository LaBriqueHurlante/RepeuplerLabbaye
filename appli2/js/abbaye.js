// JavaScript Document

$(document).ready(function(e) {

//Drag'n'drop

	$('.animaux').draggable( {
      containment: '.page',
      stack: '.menu_animaux img',
      cursor: '-webkit-grab',
      revert: 'invalid',
	  helper: 'clone'
	  
    });
	
// lieux - zone drop

	$('#grenier').droppable( {
      accept: '.l_grenier',
      hoverClass: 'hovered',
	  drop: grenierDrop
      
    });
	$('.gargouille1,.gargouille2').droppable( {
      accept: '.l_gargouilles',
      hoverClass: 'hovered',
	  drop: gargDrop
      
    });
	$('#arbre').droppable( {
      accept: '.l_arbre',
      hoverClass: 'hovered',
	  drop: arbreDrop
      
    });
	$('#jardin').droppable( {
      accept: '.l_jardin',
      hoverClass: 'hovered',
	  drop: jardinDrop
      
    });
	$('.cave1,.cave2').droppable( {
      accept: '.l_cave',
      hoverClass: 'hovered',
	  drop: caveDrop
      
    });
	
	
function grenierDrop( event, ui ) {
	ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#grenier').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#grenier').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#grenier').addClass("animated tada");
		ui.draggable.removeClass('l_grenier');
}
function gargDrop( event, ui ) {
	
	var gargNumber = Math.random() * (3 - 1) + 1;
	//alert(gargNumber);
	if (gargNumber > 2){
		var garg = '.gargouille1';	
	}else{
		var garg = '.gargouille2';
	}
	
	ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('.gargouille1,.gargouille2').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('.gargouille1,.gargouille2').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo(garg).addClass("animated tada");
		ui.draggable.removeClass('l_gargouilles');
}
function arbreDrop( event, ui ) {
	ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		ui.draggable.removeClass('l_arbre');
}
function jardinDrop( event, ui ) {
	ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		ui.draggable.removeClass('l_jardin');
}
function caveDrop( event, ui ) {
	
	var caveNumber = Math.random() * (3 - 1) + 1;
	//alert(gargNumber);
	if (caveNumber > 2){
		var cav = '.cave1';	
	}else{
		var cav = '.cave2';
	}
	
	ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('.cave1,.cave2').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('.cave1,.cave2').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo(cav).addClass("animated tada");
		ui.draggable.removeClass('l_cave');
}
});