import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	card1title: string;
	card2title: string;
	card3title: string;
  constructor() { 
  	this.card1title = "We care about you";
  	this.card2title = "We care about your money";
  	this.card3title = "We care about your experience";
  }

  ngOnInit(): void {
  }

}
