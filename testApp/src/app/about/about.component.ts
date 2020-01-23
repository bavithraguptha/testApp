import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';      // Add this
import { Router } from '@angular/router';     
@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route : ActivatedRoute) { 
    this.route.params.subscribe(res =>console.log(res))
  }

  ngOnInit() {
  }

}
