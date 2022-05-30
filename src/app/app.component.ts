import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, Unsubscribable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Get API';
  user: any;

  constructor(private userData: CoursesService) {

    userData.user().subscribe((data) => {
      console.log('data : ', data)
      this.user = data;
    })   
  
  }
  getFormUserData(data: any) {
    this.userData.saveuser(data).subscribe((result) => {
      console.log('result : ', result)
    })
  }

  ngOnInit(): void {}

}



