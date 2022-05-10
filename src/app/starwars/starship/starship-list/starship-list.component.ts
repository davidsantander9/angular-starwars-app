import { Component, Input } from '@angular/core';

/**
 * Description: 
 *  - Show starship list
 */

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styles: [
  ]
})
export class StarshipListComponent {
  /** starships: starships urls*/
  @Input() starships: string[] = [];

}
