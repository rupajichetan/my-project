import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  names = ['Prashanth', 'sam', 'DJ'];
  constructor() { }

  ngOnInit() {
    this.names.push('manohar');
    this.names.push('kishore');
    this.names.push('sai');
    this.names.push('hellp');
  }

}
