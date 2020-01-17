import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TriviaApiService {
  apiURL: string = 'https://opentdb.com';
  constructor(private httpClient: HttpClient) { }

  /**
   * Get Trivia Catetories.
   */
  getCategory(){
    return this.httpClient.get<any>(`${this.apiURL}/api_category.php`);
  };

  /**
   * get Questions.
   * @param {number} categoryId category ID to search questions.
   * @param {number} amount     the amount how many questions user wants to search.
   */
  getQuestions(categoryId?: number, amount?: number){
    let getAmount;
    if(amount){
      getAmount = amount;
    } else {
      getAmount = 10;
    }
    if(categoryId){
      return this.httpClient.get<any>(`${this.apiURL}/api.php?amount=${getAmount}&category=${categoryId}`);
    } else {
      return this.httpClient.get<any>(`${this.apiURL}/api.php?amount=${getAmount}`);
    }
  }
}

