// JavaScript Document

$(document).ready(function(e) {
	
function grenierDrop( event, ui ) {
	ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#grenier').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#grenier').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#grenier').addClass("animated tada");
			
	var counterGreAr = 0;
	var counterGreCh = 0;
	var counterGreSo = 0;
	var counterGreMo = 0;

// Création d'araignées dans le grenier
if (ui.draggable.hasClass('araignee')){
	var timerAr = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#grenier').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#grenier').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#grenier').addClass("animated tada");
		counterGreAr += 1;
		if (counterGreAr >= 9) {
		// Kill the timer after 10 times
		clearInterval(timerAr);
    }
}, 2000);
}

// Création de chouettes dans le grenier	
if (ui.draggable.hasClass('chouette')){
	var timerCh = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#grenier').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#grenier').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#grenier').addClass("animated tada");
		counterGreCh += 1;
		if (counterGreCh >= 2) {
		// Kill the timer after 10 times
		clearInterval(timerCh);
    }
}, 5000 /* In ms. So it's 2 seconds */);
}

// Création de souris dans le grenier	
if (ui.draggable.hasClass('souris')){
	var timerSo = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#grenier').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#grenier').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#grenier').addClass("animated tada");
		counterGreSo += 1;
		if (counterGreSo >= 4) {
		// Kill the timer after 10 times
		clearInterval(timerSo);
    }
}, 3000 /* In ms. So it's 2 seconds */);
}		

// Création de mouches dans le grenier	
if (ui.draggable.hasClass('mouche')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#grenier').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#grenier').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#grenier').addClass("animated tada");
		counterGreMo += 1;
		if (counterGreMo >= 9) {
		// Kill the timer after 10 times
		clearInterval(timer);
    }
}, 1000 /* In ms. So it's 2 seconds */);
}		
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
	//ui.draggable.removeClass('l_gargouilles');
	
	var counterGargMe = 0;
	var counterGargAr = 0;
	var counterGargMo = 0;
	var counterGargCs = 0;
	
// Création d'araignées sur les gargouilles
if (ui.draggable.hasClass('araignee')){
	var timer = setInterval(function() {
		
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
		counterGargAr += 1;
		if (counterGargAr >= 9) {
		clearInterval(timer);
    }
}, 2000 /* In ms. So it's 2 seconds */);
}

// Création de mesanges sur les gargouilles
if (ui.draggable.hasClass('mesange')){
	var timer = setInterval(function() {
	
	//Random gargouille1 ou gargouille2	
	var gargNumber = Math.random() * (3 - 1) + 1;
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
		counterGargMe += 1;
		if (counterGargMe >= 5) {

		clearInterval(timer);
    }
}, 3000);
}

// Création de mouches sur les gargouilles
if (ui.draggable.hasClass('mouche')){
	var timer = setInterval(function() {
	
	//Random gargouille1 ou gargouille2	
	var gargNumber = Math.random() * (3 - 1) + 1;
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
		counterGargMo += 1;
		if (counterGargMo >= 8) {

		clearInterval(timer);
    }
}, 1000);
}

// Création de chauve-souris sur les gargouilles
if (ui.draggable.hasClass('chauvesouris')){
	var timer = setInterval(function() {
	
	//Random gargouille1 ou gargouille2	
	var gargNumber = Math.random() * (3 - 1) + 1;
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
		counterGargCs += 1;
		if (counterGargCs >= 2) {

		clearInterval(timer);
    }
}, 6000);
}

}


function arbreDrop( event, ui ) {
	ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
			
	var nAraignee = 0;
	var nMesange = 0;
	var nEcureuil = 0;
	var nPapillon = 0;
	var nChauveSouris = 0;
	var nChouette = 0;

// Création d'araignées dans l'arbre
if (ui.draggable.hasClass('araignee')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		nAraignee += 1;
		if (nAraignee >= 9) {
		
		clearInterval(timer);
    }
}, 2000);
}

// Création de chouettes dans l'arbre	
if (ui.draggable.hasClass('chouette')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		nChouette += 1;
		if (nChouette >= 3) {

		clearInterval(timer);
    }
}, 5000);
}

// Création de chauvesouris dans l'arbre
if (ui.draggable.hasClass('chauvesouris')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		nChauveSouris += 1;
		if (nChauveSouris >= 2) {

		clearInterval(timer);
    }
}, 3000);
}		

// Création de ecureuils dans l'arbre
if (ui.draggable.hasClass('ecureuil')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		nEcureuil += 1;
		if (nEcureuil >= 4) {

		clearInterval(timer);
    }
}, 3000);
}

// Création de mesanges dans l'arbre
if (ui.draggable.hasClass('mesange')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		nMesange += 1;
		if (nMesange >= 5) {

		clearInterval(timer);
    }
}, 4000);
}		

// Création de papillons dans l'arbre	
if (ui.draggable.hasClass('papillon')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		nPapillon += 1;
		if (nPapillon >= 7) {

		clearInterval(timer);
    }
}, 3000);
}
		
}

function jardinDrop( event, ui ) {
	ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
			
	var nbestioles = 0;
	

// Création d'araignées dans l'jardin
if (ui.draggable.hasClass('araignee')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		nbestioles += 1;
		if (nbestioles >= 9) {
		
		clearInterval(timer);
    }
}, 2000);
}

// Création de chouettes dans l'jardin	
if (ui.draggable.hasClass('souris')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		nbestioles += 1;
		if (nbestioles >= 3) {

		clearInterval(timer);
    }
}, 5000);
}

// Création de mouches dans l'jardin
if (ui.draggable.hasClass('mouche')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		nbestioles += 1;
		if (nbestioles >= 2) {

		clearInterval(timer);
    }
}, 3000);
}		

// Création de ecureuils dans l'jardin
if (ui.draggable.hasClass('ecureuil')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		nbestioles += 1;
		if (nbestioles >= 4) {

		clearInterval(timer);
    }
}, 3000);
}

// Création de fourmis dans l'jardin
if (ui.draggable.hasClass('fourmi')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		nbestioles += 1;
		if (nbestioles >= 5) {

		clearInterval(timer);
    }
}, 4000);
}		

// Création de papillons dans l'jardin
if (ui.draggable.hasClass('papillon')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		nbestioles += 1;
		if (nbestioles >= 7) {

		clearInterval(timer);
    }
}, 3000);
}
		
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
			
	var nbestioles = 0;
	

// Création d'araignées dans .cave1,.cave2
if (ui.draggable.hasClass('araignee')){
	var timer = setInterval(function() {
		
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
		nbestioles += 1;
		if (nbestioles >= 9) {
		
		clearInterval(timer);
    }
}, 2000);
}

// Création de chouettes dans .cave1,.cave2	
if (ui.draggable.hasClass('souris')){
	var timer = setInterval(function() {
		
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
		nbestioles += 1;
		if (nbestioles >= 3) {

		clearInterval(timer);
    }
}, 5000);
}

// Création de mouches dans .cave1,.cave2
if (ui.draggable.hasClass('chauvesouris')){
	var timer = setInterval(function() {
		
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
		nbestioles += 1;
		if (nbestioles >= 2) {

		clearInterval(timer);
    }
}, 3000);
}		

// Création de ecureuils dans .cave1,.cave2
if (ui.draggable.hasClass('fourmi')){
	var timer = setInterval(function() {
		
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
		nbestioles += 1;
		if (nbestioles >= 4) {

		clearInterval(timer);
    }
}, 3000);
}
}





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
});