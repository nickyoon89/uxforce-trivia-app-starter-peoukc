import { Injectable } from '@angular/core';

//models
import { Question } from '../models/question';
import { Category } from '../models/category';
import { TriviaApiService } from './trivia-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private categoryId:number;
  private category:string;
  private userQnA: Question[];

  private categories: Category[];

  constructor(private triviaApiService: TriviaApiService) { 
    this.category = "All Category" //in case user try to approach to question page directly
  }

  //Getter, setter for Category ID
  setCategoryId(categoryId:number){
    this.categoryId = categoryId;
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
