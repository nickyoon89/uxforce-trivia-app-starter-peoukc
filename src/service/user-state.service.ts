import { Injectable } from '@angular/core';

//models
import { Question } from '../models/question';
@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private categoryId:number;
  private category:string;
  private userQnA: Question[];

  constructor() { 
    this.category = "All Category" //in case user try to approach to question page directly
  }

  //Getter, setter for Category ID
  setCategoryId(categoryId?:number){
    if (categoryId){
      this.categoryId = categoryId;
    } else {
      this.categoryId = null;
      this.category = "All Category"
    }
  }

  getCategoryId(){
    return this.categoryId;
  }

  //Getter, setter for Category Name
  setCategoryName(category:string){
    this.category = category;
  }

  getCategoryName(){
    return this.category;
  }

  //Getter, setter for Questions and Answers
  setUserQnA(userQnA:Question[]){
    this.userQnA = userQnA;
  }

  getUserQnA(){
    if(this.userQnA){
      return this.userQnA;
    }else{
      return [];
    }
  }
}
