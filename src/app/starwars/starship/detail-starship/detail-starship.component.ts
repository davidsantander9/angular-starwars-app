import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { myStarship, Starship } from '../../interfaces/starwars.interfaces';
import { StarshipService } from '../../services/starship.service';
import { StarwarsService } from '../../services/starwars.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateService } from '../../services/state.service';

/**
 * Description: 
 *  - Show starship and starship info
 *  - CRUD starship
 */
@Component({
  selector: 'app-detail-starship',
  templateUrl: './detail-starship.component.html',
  styleUrls: ['./detail-starship.component.css']
})
export class DetailStarshipComponent implements OnInit {
  /** id: id from starship api  */
  id: number = 0;
  /** id: id from starwars api  */
  idApi: number | undefined;
  /** myStarship: starship info from api  */
  myStarship!: myStarship;
  /** isLoading: change if data is loaded */
  isLoading: boolean = true;
  /** displays information if an error occurs  */
  errorText: string = "";
  
  /** starship data */
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

  /** starship form */
  form: FormGroup = this.fb.group({
    id_api: [],
    name: [ , [ Validators.required, Validators.minLength(3) ]   ],
    model: [ , [ Validators.required, Validators.minLength(3) ]   ],
    manufacturer: [ , [ Validators.required, Validators.minLength(3) ]   ],
    max_atmosphering_speed: [ , [ Validators.required, Validators.minLength(3) ]   ],
    cost_in_credits: [ , [ Validators.required, Validators.minLength(1) ]   ],
    length: [ , [ Validators.required, Validators.minLength(1) ]   ],
    crew: [ , [ Validators.required, Validators.minLength(1) ]   ],
    passengers: [ , [ Validators.required, Validators.minLength(1) ]   ],
    cargo_capacity: [ , [ Validators.required, Validators.minLength(1) ]   ],
    hyperdrive_rating: [ , [ Validators.required, Validators.minLength(1) ]   ],
    MGLT: [ , [ Validators.required, Validators.minLength(1)] ],
    starship_class: [ , [ Validators.required, Validators.minLength(1)] ],
    created: [ , [ Validators.required, Validators.minLength(10)] ],
    edited: [ , [ Validators.required, Validators.minLength(10)] ],
    url: [ , [ Validators.required, Validators.minLength(10)] ],
  }) 

  /**
   * 
   * @param starshipService connect with starship api
   * @param activatedRoute provides access to information about a route 
   * @param starwarsService connect with stawars api
   * @param stateService control movies, starhips list state
   * @param fb provides instances of a FormControl, FormGroup
   */
  constructor(
    private starshipService: StarshipService,
    private activatedRoute: ActivatedRoute,
    private starwarsService: StarwarsService,
    private stateService: StateService,
    private fb: FormBuilder 
  ) { }

  /**
   * ngOnInit set movieinfo if currentStarship exist else load info from starship api info
   *  - set information to the form
   */
  ngOnInit(): void {

    if ( this.stateService.getCurrentStarship() ){
      this.starship = this.stateService.getCurrentStarship();
    }
    this.activatedRoute.params
        .pipe(
          switchMap( ({ id }) => {
            this.id = id;
            return this.starshipService.getStarshipByIdApi(id)
          } )
        )
        .subscribe( 
           result => { 
              if( result.length > 0) { this.myStarship = result[0] } 
              this.isLoading = false;
          },
          err => {
            this.isLoading = false;
            this.errorText = err.statusText;
          }
        );

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
      MGLT: this.starship.MGLT,
      starship_class: this.starship.url,
      created: this.starship.created,
      edited: this.starship.edited,
      url: this.starship.url,
    });
    
  }

  /**
   * Verify if form is valid
   * @param field input field value
   * @returns true if form is valid
   */
  isFieldValid( field: string ) {
    return this.form.controls[field].errors 
            && this.form.controls[field].touched;
  }

  /**
   * Create or update an starship and set the result to myStarship
   * @returns void
   */
  save(){
    if ( this.form.invalid )  {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    if ( this.myStarship ){
      this.starshipService.updateStarship(this.form.value, this.myStarship.id)
      .subscribe( 
        result => { 
          this.isLoading = false;
          this.errorText = "";
          this.myStarship = result;
        },
        err => {
          this.isLoading = false;
          this.errorText = err.statusText;
          this.errorText = err.statusText +  " " +err.error.manufacturer.join(" ");
        }
       );
    }else{
        this.starshipService.createStarship(this.form.value)
        .subscribe( 
          result => { 
            this.isLoading = false;
            this.errorText = "";
            this.myStarship = result;
          },
          err => {
            this.isLoading = false;
            this.errorText = err?.statusText +  " " +err?.error?.manufacturer.join(" ");
          }
         );
    }
    this.form.reset();
  }

   /**
   * delete an starship
   * @returns void
   */
  delete(){
    if (this.myStarship) {
      this.isLoading = true;
      this.starshipService.deleteStarship(this.myStarship.id)
      .subscribe( 
        result => { 
          this.isLoading = false;
          this.errorText = "";
        },
        err => {
          this.isLoading = false;
          this.errorText = err?.statusText +  " " +err?.error?.manufacturer.join(" ");
        }
      );
    }
  }

  /**
   * pass info to the form
   * @returns void
   */
  setData(){
    this.form.reset({
      id_api: this.myStarship.id_api,
      name: this.myStarship.name,
      model: this.myStarship.model,
      manufacturer: this.myStarship.manufacturer,
      hyperdrive_rating: this.myStarship.hyperdrive_rating,
      cost_in_credits: this.myStarship.cost_in_credits,
      passengers: this.myStarship.passengers,
      length: this.myStarship.length,
      cargo_capacity: this.myStarship.cargo_capacity,
      max_atmosphering_speed: this.myStarship.max_atmosphering_speed,
      crew: this.myStarship.crew,
      passegers: this.myStarship.cargo_capacity,
      consumables: this.myStarship.consumables,
      Hyperdrive_rating: this.myStarship.hyperdrive_rating,
      MGLT: this.myStarship.MGLT,
      starship_class: this.myStarship.url,
      created: this.myStarship.created,
      edited: this.myStarship.edited,
      url: this.myStarship.url,
    });
  }

}
