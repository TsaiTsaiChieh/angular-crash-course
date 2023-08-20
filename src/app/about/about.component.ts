import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  param: any

  constructor(private activatedRouter: ActivatedRoute) {
    
  } 

  
  ngOnInit(): void {
    console.log(this.activatedRouter)
    this.param = this.activatedRouter.snapshot.params['username']
  }
}
