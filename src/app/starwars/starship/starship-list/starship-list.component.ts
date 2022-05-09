import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styles: [
  ]
})
export class StarshipListComponent implements OnInit {

  @Input() starships: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
