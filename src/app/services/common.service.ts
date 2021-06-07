import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
 private selectedCourse: any;
  constructor() { }

  setSelectedCourse(data: any){
    this.selectedCourse = data;
  }

  getSelectedCourse(){
    return this.selectedCourse;
  }
}
