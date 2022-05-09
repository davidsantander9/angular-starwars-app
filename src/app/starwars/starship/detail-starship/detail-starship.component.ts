import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { myStarship, Starship } from '../../interfaces/starwars.interfaces';
import { StarshipService } from '../../services/starship.service';
import { StarwarsService } from '../../services/starwars.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-detail-starship',
  templateUrl: './detail-starship.component.html',
  styleUrls: ['./detail-starship.component.css']
})
export class DetailStarshipComponent implements OnInit {

  id: number = 0;

  myStarship!: myStarship;
  
  starship: Starship = {
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

  form: FormGroup = this.fb.group({
    id_api: [],
    name: [ , [ Validators.required, Validators.minLength(3) ]   ],
    model: [ , [ Validators.required, Validators.minLength(3) ]   ],
    manufacturer: [ , [ Validators.required, Validators.minLength(3) ]   ],
    max_atmosphering_speed: [ , [ Validators.required, Validators.minLength(3) ]   ],
    cost_in_credits: [ , [ Validators.required, Validators.minLength(3) ]   ],
    length: [ , [ Validators.required, Validators.minLength(1) ]   ],
    crew: [ , [ Validators.required, Validators.minLength(1) ]   ],
    passengers: [ , [ Validators.required, Validators.minLength(1) ]   ],
    cargo_capacity: [ , [ Validators.required, Validators.minLength(1) ]   ],
    consumables: [ , [ Validators.required, Validators.minLength(1) ]   ],
    hyperdrive_rating: [ , [ Validators.required, Validators.minLength(1) ]   ],
    MGLT: [ , [ Validators.required, Validators.minLength(1)] ],
    starship_class: [ , [ Validators.required, Validators.minLength(1)] ],
    created: [ , [ Validators.required, Validators.minLength(1)] ],
    edited: [ , [ Validators.required, Validators.minLength(1)] ],
    url: [ , [ Validators.required, Validators.minLength(1)] ],
  }) 

  constructor(
    private starshipService: StarshipService,
    private activatedRoute: ActivatedRoute,
    private starwarsService: StarwarsService,
    private stateService: StateService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    if ( this.stateService.getCurrentStarship() ){
      this.starship = this.stateService.getCurrentStarship();
    }
    console.log(this.starship);

    this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => {
            this.id = id;
            return this.starshipService.getStarshipByIdApi(id)
          } )
        )
        .subscribe( result => { if( result.length > 0) this.myStarship = result[0] } );

    this.form.reset({
      id_api: this.id,
      name: this.starship.name,
      model: this.starship.model,
      manufacturer: this.starship.manufacturer,
      hyperdrive_rating: this.starship.hyperdrive_rating,
      cost_in_credits: this.starship.cost_in_credits,
      passengers: this.starship.passengers,
      length: this.starship.length,
      cargo_capacity: this.starship.cargo_capacity,
      max_atmosphering_speed: this.starship.max_atmosphering_speed,
      crew: this.starship.crew,
      passegers: this.starship.cargo_capacity,
      consumables: this.starship.consumables,
      Hyperdrive_rating: this.starship.hyperdrive_rating,
      MGLT: this.starship.MGLT,
      starship_class: this.starship.url,
      created: this.starship.created,
      edited: this.starship.edited,
      url: this.starship.url,
    })
    
  }

  isFieldValid( field: string ) {
    return this.form.controls[field].errors 
            && this.form.controls[field].touched;
  }

  save(){
    // if ( this.form.invalid )  {
    //   this.form.markAllAsTouched();
    //   return;
    // }

    console.log(this.form.value);
    this.starshipService.createStarship(this.form.value).subscribe( starship => console.log(starship) );
    this.form.reset();
  }

}
