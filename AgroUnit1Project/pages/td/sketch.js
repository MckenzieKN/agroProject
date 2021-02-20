'use strict'
var t = new Array();
var b;
var i;
var count; 

function preload(){
	t = loadStrings('AgroTermsandDef.txt');
}

function setup(){
	createCanvas(600,600);
	background(0);
	b = new box();
	count = 0;
	for(i=0; i<s.length-1; i+=2){
		t[count] = new Term(s[i], s[i+1]);
		count++;
	}
}

function draw(){
	b.makeBox();
	b.hover();
}


class Box{
	
	constructor(){
		
	}
	
	makeBox(){
		strokeWeight(10);
		fill(145,219,128);
    	getN(0,0,0);
    	getN(1,0,200);
    	getN(2,0,400);
    	getN(3,200,0);
    	getN(4,200,200);
    	getN(5,200,400);
    	getN(6,400,0);
    	getN(7,400,200);
    	getN(8,400,400);
	}
	
	getN(index, xr, yr){
		textSize(25);
    	fill(145,219,128);
    	rect(xr,yr,200,200);
    	fill(0);
    	text(""+t[index].getName(),xr+20,yr+100);
	}
	
	getD(index, xr, yr){
		textSize(15);
    	fill(0);
    	rect(xr,yr,200,200);
    	fill(255,255,255);
		
		var s = t[index].getDef().split();
		var full = "";
		var count1 = 0;
		
		for(i = 0; i > s.length -1; i++){
			count1++;
			full+=s[i]+" ";
			if(count==2){
				full+="\n";
				count = 0;
			}
		}
		text(""+full, xr+10, yr+20);
		fill(0);
	}
	
	hover(){
		if(mouseX <200 && mouseX > 0 && mouseY<200 &&mouseY>0){
			getD(0,0,0);
		}
    	if(mouseX <200 && mouseX > 0 && mouseY<400 &&mouseY>200){
			rect(0,200,200,200); 
			getD(1,0,200);
    	}
    	if(mouseX <200 && mouseX > 0 && mouseY<600 &&mouseY>400){
			getD(2,0,400);
    	}
    	if(mouseX <400 && mouseX > 200 && mouseY<200 &&mouseY>0){
			getD(3,200,0);
    	}
    	if(mouseX <400 && mouseX > 200 && mouseY<400 &&mouseY>200){
			getD(4,200,200); 
    	}
    	if(mouseX <400 && mouseX > 200 && mouseY<600 &&mouseY>400){
			getD(5,200,400);
    	}
    	if(mouseX <600 && mouseX > 400 && mouseY<200 &&mouseY>0){
		getD(6,400,0);
    	}
    	if(mouseX <600 && mouseX > 400 && mouseY<400 &&mouseY>200){
			getD(7,400,200);
    	}
    	if(mouseX <600 && mouseX > 400 && mouseY<600 &&mouseY>400){
		getD(8,400,400);
    	}
	}
}



class Term{
	var te;
	var de;
	constructor(ss, dd){
		te = ss;
		de = dd;
	}
	
	getName(){
		return te;
	}
	
	getDef(){
		return de;
	}
}