import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Starship } from '../../interfaces/starwars.interfaces';
import { StarwarsService } from '../../services/starwars.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-starship-item',
  templateUrl: './starship-item.component.html',
  styleUrls: ['./starship-item.component.css']
})
export class StarshipItemComponent implements OnInit {

  @Input() url: string = "";
  
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

  isLoaded  : boolean = true;
  idStarship: string = '';

  constructor( 
    private starwarsService: StarwarsService,
    private stateService: StateService,
    private router: Router
    ) { }

  ngOnInit(): void {
      this.starwarsService.getStarshipByUrl(this.url)
        .subscribe( starship => { 
          this.startship = starship;
          this.idStarship = starship.url.split("/")[5];
        })
  }

  goToDetailStarship(): void {
    this.stateService.setCurrentStarship(this.startship);
    this.router.navigate(['/starwars/starship', this.idStarship]);
  }
}
