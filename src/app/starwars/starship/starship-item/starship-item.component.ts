import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Starship } from '../../interfaces/starwars.interfaces';
import { StarwarsService } from '../../services/starwars.service';
import { StateService } from '../../services/state.service';

/**
 * Description: 
 *  - Load starship info and show it
 */
@Component({
  selector: 'app-starship-item',
  templateUrl: './starship-item.component.html',
  styleUrls: ['./starship-item.component.css']
})
export class StarshipItemComponent implements OnInit {
  /** url: url starship info  */
  @Input() url: string = "";
  /** isLoading: change if data is loaded */
  isLoading: boolean = true;
  /** starship data */
  startship: Starship = {
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    created: undefined,
    edited: undefined,
    url: '',
    pilots: [],
    films: []
  };
  /** id: id from starship api  */
  idStarship: string = '';

  /**
   * 
   * @param starwarsService connect with starship api
   * @param stateService control movies, starhips list state
   * @param router config application routes
   */
  constructor( 
    private starwarsService: StarwarsService,
    private stateService: StateService,
    private router: Router
    ) { }

  /**
   * load  starship info from starwars api
   */
  ngOnInit(): void {
      this.starwarsService.getStarshipByUrl(this.url)
        .subscribe( starship => { 
          this.startship = starship;
          this.idStarship = starship.url.split("/")[5];
          this.isLoading = false;
        })
  }

  /**
   * Description: 
   *  - go to StarshipDetailCompoente 
   *  - set current Starship
   */  
  goToDetailStarship(): void {
    this.stateService.setCurrentStarship(this.startship);
    this.router.navigate(['/starwars/starship', this.idStarship]);
  }
}
