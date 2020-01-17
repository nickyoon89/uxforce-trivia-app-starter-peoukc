import { CommonService } from '@service/common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { TriviaApiService } from '@service/trivia-api.service'
import { UserStateService } from '@service/user-state.service'

//models
import { Category } from '@models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  triviaCategories: Category[];

  constructor(
    private triviaApiService: TriviaApiService,
    private userStateService: UserStateService,
    private commonService: CommonService,
    private router: Router,
  ) {}
  
  ngOnInit() {
    this.commonService.toTheTop(document);

    this.triviaApiService.getCategory()
    .subscribe( res =>{
        this.triviaCategories = res.trivia_categories;
      }
    ) 
  }

  /**
   * Go to Questions Page
   * @param {number} categoryId       category ID.
   * @param {string} categoryName     category Name.
   */
  goToQuestions(categoryId?:number, categoryName?:string){
    if(categoryId) {
      this.userStateService.setCategoryId(categoryId);
    }
    if(categoryName) {
      this.userStateService.setCategoryName(categoryName);
    }
    this.router.navigateByUrl('/questions');
  }

}
