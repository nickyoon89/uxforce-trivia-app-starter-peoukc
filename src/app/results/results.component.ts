import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { UserStateService } from '@service/user-state.service';
import { CommonService } from '@service/common.service';

//models
import { Question } from '@models/question';
import { ChartData } from '@models/chartData';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  userQnA: Question[];
  questionCnt: number;
  rightAnswerCnt: number;
  chartData: ChartData;
  constructor(
    private router : Router,
    private userStateService : UserStateService,
    private commonService : CommonService,
  ) { }

  ngOnInit() {   
    
    this.commonService.toTheTop(document);

    this.userQnA = this.userStateService.getUserQnA();
    this.questionCnt = this.userQnA.length;
    if (this.questionCnt === 0) {
      this.router.navigateByUrl('/categories');
    }
    this.rightAnswerCnt = 0;
    this.chartData = new ChartData;
    this.userQnA.forEach(question => {
      if(question.is_right_answer){
        this.rightAnswerCnt++;
      }
    });
    this.chartData.labels = [`Correct`, 'Incorrect'];
    this.chartData.datasets = [
      {
          data: [this.rightAnswerCnt, this.questionCnt-this.rightAnswerCnt],
          backgroundColor: [
            "#36A2EB",
            "#FF6384",
          ],
          hoverBackgroundColor: [
            "#36A2EB",  
            "#FF6384"              
          ]
      }]  
  }

  /**
   * Go back to Categories page.
   */
  goToCategories(){
    this.router.navigateByUrl('/categories');
  }
}
