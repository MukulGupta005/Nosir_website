import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private resService : RestService) { }

 getCourses(){
   return this.resService.get("src/assets/config/cards.json");
 }
}
