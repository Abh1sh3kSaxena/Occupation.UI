import { Component, OnInit } from '@angular/core';
import { OccupationService } from 'src/services/occupation.service';
//import * as raitings from '../assets/mocks/rating.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  name: string;
  age: number;
  dob: string;
  value: string;
  sumInsured: number;
  occupations : string[];
  premium : number = -1;
  selectedOccupation : string;
  raitings : {};
  error : string = '';
  
constructor(private occupationService:OccupationService){

}
  async ngOnInit(){
    await this.occupationService.getRaitings().subscribe(data => {
this.raitings = data;
    });
await this.occupationService.getOccupation().subscribe(data => {
this.occupations = data;
});
  }

  calculateInsured(){
    if(this.sumInsured > 0 && this.raitings[this.selectedOccupation] != null
      && this.age > 0){
        this.error = '';
    this.premium = (this.sumInsured * this.raitings[this.selectedOccupation] * this.age) /1000 * 12;
      }
      else 
      {
        this.premium = -1;
        this.error = "Please complete mandatory field"
      }
  }
}
