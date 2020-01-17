import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

//Services
import { UserStateService } from '@service/user-state.service';
import { TriviaApiService } from '@service/trivia-api.service';
import { CommonService } from '@service/common.service';

//models
import { Question } from '@models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  categoryId:number;
  categoryName:string;
  triviaQuestions: Question[];

  constructor(
    private userStateService : UserStateService,
    private triviaApiService : TriviaApiService,
    private commonService : CommonService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.commonService.toTheTop(document);
    
    this.categoryId = this.userStateService.getCategoryId();
    this.categoryName = this.userStateService.getCategoryName();
    this.triviaApiService.getQuestions(this.categoryId)
    .subscribe( res =>{
        this.triviaQuestions = res.results;
        this.triviaQuestions = this.triviaQuestions.map(value => {
          let asnwers = Object.assign([],value.incorrect_answers);
          asnwers.push(value.correct_answer);
          if(value.type !== `boolean`){
            this.commonService.shuffle(asnwers);
          }else if(asnwers[0]===`False`){
            asnwers.reverse();
          }
          value.answers=asnwers;
          return value
        });
      }
    ) 
  }

  /**
   * Choose answer event
   * @param {number} i          index of the question.
   * @param {string} answer     user answer.
   */
  chooseAnswer(i:number, answer:string){
    this.triviaQuestions[i].user_answer = answer;
    this.triviaQuestions[i].is_right_answer = (this.commonService.decodeHtml(this.triviaQuestions[i].correct_answer)===this.commonService.decodeHtml(answer));
  }

  /**
   * Go to Results page.
   */
  goToResults(){
    this.userStateService.setUserQnA(this.triviaQuestions);
    this.router.navigateByUrl('/results');
  }
}
