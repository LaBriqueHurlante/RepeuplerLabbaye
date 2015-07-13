// JavaScript Document

$(document).ready(function(e) {

// Délai d'apparition des bestioles en seconde
var delaiAraignee = 25000;
var delaiChouette = 50000;
var delaiSouris = 26000;
var delaiMouche = 17000;
var delaiMesange = 26000;
var delaiChauvesouris = 44000;
var delaiEcureuil = 24000;
var delaiFourmi = 17000;
var delaiPapillon = 17000;

// Cycle de rajout des Prédateurs
// ex : au bout de cb de cycles une nouvelle chouette apparait
var cycleAraignee = 1;
var cycleChouette = 10;
var cycleSouris = 5;
var cycleMesange = 5;
var cycleChauvesouris = 5;
var cycleEcureuil = 8;

//Nombre de proies avalées par cycle
var mangeAraignee = 1;
var mangeChouette = 2;
var mangeSouris = 1;
var mangeMesange = 3;
var mangeChauvesouris = 2;
var mangeEcureuil = 3;

//Nbre total d'apparition
var totalAraignee = 0;
var totalChouette = 0;
var totalSouris = 0;
var totalMouche = 100;
var totalMesange = 0;
var totalChauvesouris = 0;
var totalEcureuil = 0;
var totalFourmi = 100;
var totalPapillon = 100;


// Predation dans le Grenier
function predaGreChouette(){
	// counter : arrivé à x, on crée une chouette
	var counterArMo = 0;
	var counterSo = 0;
	
	//slice : On démarre à 1 araignée mangée par cycle
	//Ce nombre augmente de 1 dès qu'une nouvelle chouette est créée
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation Chouette => araignee et mouche
	
	
		var timer = setInterval(function() {
			
			if($("#grenier").find(".araignee, .mouche, .souris").length > 0){

			$('#grenier .araignee,#grenier .mouche,#grenier .souris').slice(0,mangeChouette).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleChouette) {
				creaGreChouette();	
				
				// on réinitialise le compteur
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		//alert('pas de proie, les chouettes se barrent');
		$('#grenier .chouette').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiChouette);
}

function predaGreSouris(){
	// counter : arrivé à 10, on crée une chouette
	var counterArMo = 0;
	var counterSo = 0;
	
	//slice : On démarre à 1 araignée mangée par cycle
	//Ce nombre augmente de 1 dès qu'une nouvelle chouette est créée
	//var sliceArMo = 1;

//cycle de prédation souris => araignee et mouche
	
		var timer = setInterval(function() {
			if($('#grenier').find(".araignee, .mouche").length > 0){
			//alert('y a des araignees');
			$('#grenier .araignee,#grenier .mouche').slice(0,mangeSouris).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleSouris) {
				creaGreSouris();	
				
				// on réinitialise le compteur
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#grenier .souris').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiSouris);
}

function predaGreAraignee(){
	// counter : arrivé à x, on crée une bête
	var counterMo = 0;
	
	//slice : On démarre à 1 bete mangée par cycle
	//Ce nombre augmente de 1 dès qu'un nouveau prédateur est créé
	//var sliceMo = 1;

//cycle de prédation araignee => mouche
	
	var timer = setInterval(function() {
			if($('#grenier').find(".mouche").length > 0){
			//alert('y a des araignees');
			$('#grenier .mouche').slice(0,mangeAraignee).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterMo += 1;
			if (counterMo >= cycleAraignee) {	
				creaGreAraignee();
				// on réinitialise le compteur
				counterMo = 0;
				//sliceMo += 1;
			}			
		}else{
		$('#grenier .araignee').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);			
		}
	}, delaiAraignee);
}




// Predation Gargouilles

function predaGarChauveSouris(){
	// counter : arrivé à x, on crée une bestiole
	var counterArMo = 0;
	var counterSo = 0;
	
	//slice : On démarre à 1 proie mangée par cycle
	//Ce nombre augmente de 1 dès qu'un predateur est créé
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation ChauveSouris => araignee et mouche	
		var timer = setInterval(function() {
			
			if($("#gargouilles").find(".araignee, .mouche, .mesange").length > 0){

			$('#gargouilles .araignee,#gargouilles .mouche, #gargouilles .mesange').slice(0,mangeChauvesouris).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleChauvesouris) {
				creaGarChauvesouris();	
				
				// on réinitialise le compteur
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		//alert('pas de proie, les chouettes se barrent');
		$('#gargouilles .chauvesouris').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiChauvesouris);
	
}

function predaGarMesange(){
	// counter : arrivé à 10, on crée une chouette
	var counterArMo = 0;
	var counterSo = 0;
	
	//slice : On démarre à 1 araignée mangée par cycle
	//Ce nombre augmente de 1 dès qu'une nouvelle bête est créée
	//var sliceArMo = 1;

//cycle de prédation mesange => araignee et mouche
	
		var timer = setInterval(function() {
			if($('#gargouilles').find(".araignee, .mouche").length > 0){
			$('#gargouilles .araignee,#gargouilles .mouche').slice(0,mangeMesange).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleMesange) {
				creaGarMesange();	
				
				// on réinitialise le compteur
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#gargouilles .mesange').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiMesange);
}

function predaGarAraignee(){
	var counterMo = 0;
	//var sliceMo = 1;
//cycle de prédation araignee => mouche	
	var timer = setInterval(function() {
			if($('#gargouilles').find(".mouche").length > 0){
			//alert('y a des araignees');
			$('#gargouilles .mouche').slice(0,mangeAraignee).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterMo += 1;
			if (counterMo >= cycleAraignee) {	
			creaGarAraignee();	
				// on réinitialise le compteur
				counterMo = 0;
				//sliceMo += 1;
			}			
		}else{
		$('#gargouilles .araignee').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);			
		}
	}, delaiAraignee);
}





// Predation Cave
function predaCavChauveSouris(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation ChauveSouris => araignee et mouche	et fourmi
		var timer = setInterval(function() {
			
			if($("#caves").find(".araignee, .mouche, .fourmi").length > 0){

			$('#caves .araignee,#caves .mouche, #caves .fourmi').slice(0,mangeChauvesouris).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleChauvesouris) {
				creaCavChauvesouris();		
				// on réinitialise le compteur
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		//alert('pas de proie, les chouettes se barrent');
		$('#caves .chauvesouris').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiChauvesouris);	
}

function predaCavSouris(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;

//cycle de prédation souris => araignee et fourmi
	
		var timer = setInterval(function() {
			if($('#caves').find(".araignee, .fourmi").length > 0){
			$('#caves .araignee,#caves .fourmi').slice(0,mangeSouris).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleSouris) {
				creaCavSouris();	
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#caves .souris').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiSouris);
}

function predaCavAraignee(){
	var counterMo = 0;
	//var sliceMo = 1;
	var timer = setInterval(function() {
			if($('#caves').find(".fourmi").length > 0){
			$('#caves .fourmi').slice(0,mangeAraignee).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterMo += 1;
			if (counterMo >= cycleAraignee) {	
			creaCavAraignee();	
				counterMo = 0;
				//sliceMo += 1;
			}			
		}else{
		$('#caves .araignee').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);			
		}
	}, delaiAraignee);
}


// Predation Jardin
function predaJarEcureuil(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation ecureuil => araignee et mouche	et fourmi et papillon
		var timer = setInterval(function() {
			
			if($("#jardin").find(".araignee, .mouche, .fourmi, .papillon").length > 0){

			$('#jardin .araignee, #jardin .mouche, #jardin .fourmi, #jardin .papillon').slice(0,mangeEcureuil).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleEcureuil) {
				creaJarEcureuil();		
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#jardin .ecureuil').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiEcureuil);	
}

function predaJarSouris(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation ecureuil => araignee et mouche	et fourmi et papillon
		var timer = setInterval(function() {
			
			if($("#jardin").find(".araignee, .mouche, .fourmi, .papillon").length > 0){

			$('#jardin .araignee, #jardin .mouche, #jardin .fourmi, #jardin .papillon').slice(0,mangeSouris).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleSouris) {
				creaJarSouris();		
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#jardin .souris').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiEcureuil);	
}

function predaJarMesange(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;
	
		var timer = setInterval(function() {
			if($('#jardin').find(".araignee, .mouche, .fourmi, .papillon").length > 0){
			$('#jardin .araignee, #jardin .mouche, #jardin .fourmi, #jardin .papillon').slice(0,mangeMesange).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleMesange) {
				creaJarMesange();	
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#jardin .mesange').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiMesange);
}

function predaJarAraignee(){
	var counterMo = 0;
	//var sliceMo = 1;
	var timer = setInterval(function() {
			if($('#jardin').find(".fourmi,.mouche,.papillon").length > 0){
			$('#jardin .fourmi,#jardin .mouche,#jardin .papillon').slice(0,mangeAraignee).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterMo += 1;
			if (counterMo >= cycleAraignee) {	
			creaJarAraignee	();
				counterMo = 0;
				//sliceMo += 1;
			}			
		}else{
		$('#jardin .araignee').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);			
		}
	}, delaiAraignee);
}

// Predation arbre
function predaArbChouette(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation chouette => chauvesouris araignee et mesange et ecureuil et papillon
		var timer = setInterval(function() {
			
			if($("#arbre").find(".araignee, .mesange, .chauvesouris, .papillon, .ecureuil").length > 0){

			$('#arbre .araignee, #arbre .mesange, #arbre .chauvesouris, #arbre .papillon, #arbre .ecureuil').slice(0,mangeChouette).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleChouette) {
				creaArbChouette();		
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#arbre .chouette').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiChouette);	
}

function predaArbChauveSouris(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation chauvesouris =>araignee et mesange et ecureuil et papillon
		var timer = setInterval(function() {
			
			if($("#arbre").find(".araignee, .mesange, .papillon, .ecureuil").length > 0){

			$('#arbre .araignee, #arbre .mesange, #arbre .papillon, #arbre .ecureuil').slice(0,mangeChauvesouris).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleChauvesouris) {
				creaArbChauveSouris();		
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#arbre .chauvesouris').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiChauvesouris);	
}

function predaArbMesange(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation mesange =>araignee et papillon
		var timer = setInterval(function() {
			
			if($("#arbre").find(".araignee, .papillon").length > 0){

			$('#arbre .araignee, #arbre .papillon').slice(0,mangeMesange).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleMesange) {
				creaArbMesange();		
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#arbre .mesange').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiMesange);	
}

function predaArbEcureuil(){
	var counterArMo = 0;
	var counterSo = 0;
	//var sliceArMo = 1;
	//var sliceSo = 1;

//cycle de prédation ecureuil =>araignee et papillon
		var timer = setInterval(function() {
			
			if($("#arbre").find(".araignee, .papillon").length > 0){

			$('#arbre .araignee, #arbre .papillon').slice(0,mangeEcureuil).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterArMo += 1;
			if (counterArMo >= cycleEcureuil) {
				creaArbEcureuil();		
				counterArMo = 0;
				//sliceArMo += 1;
			}			
	}else{
		$('#arbre .ecureuil').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);
		}
	}, delaiEcureuil);	
}

function predaArbAraignee(){
	var counterMo = 0;
	//var sliceMo = 1;
	var timer = setInterval(function() {
			if($('#arbre').find(".papillon").length > 0){
			$('#arbre .papillon').slice(0,mangeAraignee).fadeOut('fast',function(){
				$(this).remove();
				})		
			counterMo += 1;
			if (counterMo >= cycleAraignee) {	
			creaArbAraignee();	
				counterMo = 0;
				//sliceMo += 1;
			}
	}else{
		$('#arbre .araignee').fadeOut('fast', function(){
			$(this).remove();
			});
		clearInterval(timer);			
		}
	}, delaiAraignee);
}

// Génération des predateurs après ingestion de proies
function creaGreChouette(){
	$('<img class="chouette" src="img/chouette.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#grenier').height() - $('.chouette').height())).toFixed()+'px',
	'left': (Math.random() * ($('#grenier').width() - $('.chouette').width())).toFixed()+'px'
	}).appendTo('#grenier').addClass("animated tada");
}
// Génération des souris après ingestion de proies
function creaGreSouris(){
	$('<img class="souris" src="img/mouse.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#grenier').height() - $('.souris').height())).toFixed()+'px',
	'left': (Math.random() * ($('#grenier').width() - $('.souris').width())).toFixed()+'px'
	}).appendTo('#grenier').addClass("animated tada");
}
// Génération des souris après ingestion de proies
function creaGreAraignee(){
	$('<img class="araignee" src="img/araignee.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#grenier').height() - $('.araignee').height())).toFixed()+'px',
	'left': (Math.random() * ($('#grenier').width() - $('.araignee').width())).toFixed()+'px'
	}).appendTo('#grenier').addClass("animated tada");
}
// Génération des ChauveSouris après ingestion de proies
function creaGarChauvesouris(){	
	var gargNumber = Math.random() * (3 - 1) + 1;
	if (gargNumber > 2){
		var garg = '.gargouille1';	
	}else{
		var garg = '.gargouille2';
	}	
	$('<img class="chauvesouris" src="img/chauvesouris.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('.gargouille1,.gargouille2').height() - $('.chauvesouris').height())).toFixed()+'px',
	'left': (Math.random() * ($('.gargouille1,.gargouille2').width() - $('.chauvesouris').width())).toFixed()+'px'
	}).appendTo(garg).addClass("animated tada");
}
// Génération des mesanges après ingestion de proies
function creaGarMesange(){	
	var gargNumber = Math.random() * (3 - 1) + 1;
	if (gargNumber > 2){
		var garg = '.gargouille1';	
	}else{
		var garg = '.gargouille2';
	}	
	$('<img class="mesange" src="img/mesange.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('.gargouille1,.gargouille2').height() - $('.mesange').height())).toFixed()+'px',
	'left': (Math.random() * ($('.gargouille1,.gargouille2').width() - $('.mesange').width())).toFixed()+'px'
	}).appendTo(garg).addClass("animated tada");
}
// Génération des mesanges après ingestion de proies
function creaGarAraignee(){	
	var gargNumber = Math.random() * (3 - 1) + 1;
	if (gargNumber > 2){
		var garg = '.gargouille1';	
	}else{
		var garg = '.gargouille2';
	}	
	$('<img class="araignee" src="img/araignee.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('.gargouille1,.gargouille2').height() - $('.araignee').height())).toFixed()+'px',
	'left': (Math.random() * ($('.gargouille1,.gargouille2').width() - $('.araignee').width())).toFixed()+'px'
	}).appendTo(garg).addClass("animated tada");
}
// Génération des ChauveSouris après ingestion de proies
function creaCavChauvesouris(){	
	var gargNumber = Math.random() * (3 - 1) + 1;
	if (gargNumber > 2){
		var garg = '.cave1';	
	}else{
		var garg = '.cave2';
	}	
	$('<img class="chauvesouris" src="img/chauvesouris.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('.cave1,.cave2').height() - $('.chauvesouris').height())).toFixed()+'px',
	'left': (Math.random() * ($('.cave1,.cave2').width() - $('.chauvesouris').width())).toFixed()+'px'
	}).appendTo(garg).addClass("animated tada");
}
// Génération des souris après ingestion de proies
function creaCavSouris(){
	var gargNumber = Math.random() * (3 - 1) + 1;
	if (gargNumber > 2){
		var garg = '.cave1';	
	}else{
		var garg = '.cave2';
	}
	$('<img class="souris" src="img/mouse.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#caves').height() - $('.souris').height())).toFixed()+'px',
	'left': (Math.random() * ($('#caves').width() - $('.souris').width())).toFixed()+'px'
	}).appendTo(garg).addClass("animated tada");
}
// Génération des araignees après ingestion de proies
function creaCavAraignee(){
	var gargNumber = Math.random() * (3 - 1) + 1;
	if (gargNumber > 2){
		var garg = '.cave1';	
	}else{
		var garg = '.cave2';
	}
	$('<img class="araignee" src="img/araignee.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#caves').height() - $('.araignee').height())).toFixed()+'px',
	'left': (Math.random() * ($('#caves').width() - $('.araignee').width())).toFixed()+'px'
	}).appendTo(garg).addClass("animated tada");
}
// Génération des predateurs après ingestion de proies
function creaJarEcureuil(){
	$('<img class="ecureuil" src="img/ecureuil.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#jardin').height() - $('.ecureuil').height())).toFixed()+'px',
	'left': (Math.random() * ($('#jardin').width() - $('.ecureuil').width())).toFixed()+'px'
	}).appendTo('#jardin').addClass("animated tada");
}
// Génération des predateurs après ingestion de proies
function creaJarSouris(){
	$('<img class="souris" src="img/mouse.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#jardin').height() - $('.souris').height())).toFixed()+'px',
	'left': (Math.random() * ($('#jardin').width() - $('.souris').width())).toFixed()+'px'
	}).appendTo('#jardin').addClass("animated tada");
}
// Génération des mesanges après ingestion de proies
function creaJarMesange(){
	$('<img class="mesange" src="img/mesange.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#jardin').height() - $('.mesange').height())).toFixed()+'px',
	'left': (Math.random() * ($('#jardin').width() - $('.mesange').width())).toFixed()+'px'
	}).appendTo('#jardin').addClass("animated tada");
}
// Génération des araignees après ingestion de proies
function creaJarAraignee(){
	$('<img class="araignee" src="img/araignee.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#jardin').height() - $('.araignee').height())).toFixed()+'px',
	'left': (Math.random() * ($('#jardin').width() - $('.araignee').width())).toFixed()+'px'
	}).appendTo('#jardin').addClass("animated tada");
}
// Génération des predateurs après ingestion de proies
function creaArbChouette(){
	$('<img class="chouette" src="img/chouette.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#arbre').height() - $('.chouette').height())).toFixed()+'px',
	'left': (Math.random() * ($('#arbre').width() - $('.chouette').width())).toFixed()+'px'
	}).appendTo('#arbre').addClass("animated tada");
}
// Génération des predateurs après ingestion de proies
function creaArbChauveSouris(){
	$('<img class="chauvesouris" src="img/chauvesouris.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#arbre').height() - $('.chauvesouris').height())).toFixed()+'px',
	'left': (Math.random() * ($('#arbre').width() - $('.chauvesouris').width())).toFixed()+'px'
	}).appendTo('#arbre').addClass("animated tada");
}
// Génération des predateurs après ingestion de proies
function creaArbMesange(){
	$('<img class="mesange" src="img/mesange.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#arbre').height() - $('.mesange').height())).toFixed()+'px',
	'left': (Math.random() * ($('#arbre').width() - $('.mesange').width())).toFixed()+'px'
	}).appendTo('#arbre').addClass("animated tada");
}
// Génération des predateurs après ingestion de proies
function creaArbEcureuil(){
	$('<img class="ecureuil" src="img/ecureuil.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#arbre').height() - $('.ecureuil').height())).toFixed()+'px',
	'left': (Math.random() * ($('#arbre').width() - $('.ecureuil').width())).toFixed()+'px'
	}).appendTo('#arbre').addClass("animated tada");
}
// Génération des predateurs après ingestion de proies
function creaArbAraignee(){
	$('<img class="araignee" src="img/araignee.png" />').css({
	'position':'absolute',
	'top': (Math.random() * ($('#arbre').height() - $('.araignee').height())).toFixed()+'px',
	'left': (Math.random() * ($('#arbre').width() - $('.araignee').width())).toFixed()+'px'
	}).appendTo('#arbre').addClass("animated tada");
}



// Les fonctions au drop
	
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
		
		//quand l'araignee arrive, on retire des proies
		predaGreAraignee()
		
		counterGreAr += 1;
		if (counterGreAr >= totalAraignee) {
		// Kill the timer after 10 times
		clearInterval(timerAr);
		counterGreAr = 0;
		
    }
}, delaiAraignee);
}

// Création de chouettes dans le grenier	
if (ui.draggable.hasClass('chouette')){
	var timerCh = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#grenier').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#grenier').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#grenier').addClass("animated tada");
		
		
		//quand la chouette arrive, on retire des proies
		predaGreChouette();
		
		counterGreCh += 1;
		if (counterGreCh >= totalChouette) {

		clearInterval(timerCh);
    }
}, delaiChouette);
}

// Création de souris dans le grenier	
if (ui.draggable.hasClass('souris')){
	var timerSo = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#grenier').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#grenier').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#grenier').addClass("animated tada");
		
		//quand la souris arrive, on retire des proies
		predaGreSouris();
		
		counterGreSo += 1;
		if (counterGreSo >= totalSouris) {

		clearInterval(timerSo);
    }
}, delaiSouris);
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
		if (counterGreMo >= totalMouche) {
		// Kill the timer after 10 times
		clearInterval(timer);
		//counterGreMo = 0;
    }
}, delaiMouche);
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
		
		predaGarAraignee();
		counterGargAr += 1;
		if (counterGargAr >= totalAraignee) {
		clearInterval(timer);
    }
}, delaiAraignee);
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
		
		predaGarMesange();
		counterGargMe += 1;
		if (counterGargMe >= totalMesange) {

		clearInterval(timer);
    }
}, delaiMesange);
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
		if (counterGargMo >= totalMouche) {

		clearInterval(timer);
    }
}, delaiMouche);
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
		
		predaGarChauveSouris();
		
		counterGargCs += 1;
		if (counterGargCs >= totalChauvesouris) {

		clearInterval(timer);
    }
}, delaiChauvesouris);
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
		
		predaArbAraignee();
		nAraignee += 1;
		if (nAraignee >= totalAraignee) {
		
		clearInterval(timer);
    }
}, delaiAraignee);
}

// Création de chouettes dans l'arbre	
if (ui.draggable.hasClass('chouette')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		
		predaArbChouette();
		nChouette += 1;
		if (nChouette >= totalChouette) {

		clearInterval(timer);
    }
}, delaiChouette);
}

// Création de chauvesouris dans l'arbre
if (ui.draggable.hasClass('chauvesouris')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		
		predaArbChauveSouris();
		nChauveSouris += 1;
		if (nChauveSouris >= totalChauvesouris) {

		clearInterval(timer);
    }
}, delaiChauvesouris);
}		

// Création de ecureuils dans l'arbre
if (ui.draggable.hasClass('ecureuil')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		
		predaArbEcureuil();
		nEcureuil += 1;
		if (nEcureuil >= totalEcureuil) {

		clearInterval(timer);
    }
}, delaiEcureuil);
}

// Création de mesanges dans l'arbre
if (ui.draggable.hasClass('mesange')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#arbre').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#arbre').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#arbre').addClass("animated tada");
		
		predaArbMesange();
		nMesange += 1;
		if (nMesange >= totalMesange) {

		clearInterval(timer);
    }
}, delaiMesange);
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
		if (nPapillon >= totalPapillon) {

		clearInterval(timer);
    }
}, delaiPapillon);
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
		
		predaJarAraignee();
		nbestioles += 1;
		if (nbestioles >= totalAraignee) {
		
		clearInterval(timer);
    }
}, delaiAraignee);
}

// Création de mésanges dans l'jardin
if (ui.draggable.hasClass('mesange')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		
		predaJarMesange();
		nbestioles += 1;
		if (nbestioles >= totalMesange) {
		
		clearInterval(timer);
    }
}, delaiMesange);
}

// Création de souris dans l'jardin	
if (ui.draggable.hasClass('souris')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		
		predaJarSouris();
		nbestioles += 1;
		if (nbestioles >= totalSouris) {

		clearInterval(timer);
    }
}, delaiSouris);
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
		if (nbestioles >= totalMouche) {

		clearInterval(timer);
    }
}, delaiMouche);
}		

// Création de ecureuils dans l'jardin
if (ui.draggable.hasClass('ecureuil')){
	var timer = setInterval(function() {
		ui.draggable.clone().css({
		'position':'absolute',
		'top': (Math.random() * ($('#jardin').height() - ui.draggable.height())).toFixed()+'px',
		'left': (Math.random() * ($('#jardin').width() - ui.draggable.width())).toFixed()+'px'
		}).appendTo('#jardin').addClass("animated tada");
		
		predaJarEcureuil();
		nbestioles += 1;
		if (nbestioles >= totalEcureuil) {

		clearInterval(timer);
    }
}, delaiEcureuil);
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
		if (nbestioles >= totalFourmi) {

		clearInterval(timer);
    }
}, delaiFourmi);
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
		if (nbestioles >= totalPapillon) {

		clearInterval(timer);
    }
}, delaiPapillon);
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
		
		predaCavAraignee();
		nbestioles += 1;
		if (nbestioles >= totalAraignee) {
		
		clearInterval(timer);
    }
}, delaiAraignee);
}

// Création de souris dans .cave1,.cave2	
if (ui.draggable.hasClass('souris')){
	var timer = setInterval(function() {
		
		var caveNumber = Math.random() * (3 - 1) + 1;
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
		
		predaCavSouris();
		nbestioles += 1;
		if (nbestioles >= totalSouris) {

		clearInterval(timer);
    }
}, delaiSouris);
}

// Création de chauvesouris dans .cave1,.cave2
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
		
		predaCavChauveSouris();
		nbestioles += 1;
		if (nbestioles >= totalChauvesouris) {

		clearInterval(timer);
    }
}, delaiChauvesouris);
}		

// Création de fourmi dans .cave1,.cave2
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
		if (nbestioles >= totalFourmi) {

		clearInterval(timer);
    }
}, delaiFourmi);
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