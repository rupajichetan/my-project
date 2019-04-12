import { Component, OnInit } from '@angular/core';
import { namespaceHTML } from '@angular/core/src/render3';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  names = ['Prashanth', 'sam'];
  constructor() { }

  ngOnInit() {
    this.names.push('manohar');
    this.names.push('kishore');
    this.names.push('sai');
    this.names.push('hellp');
  }

}
