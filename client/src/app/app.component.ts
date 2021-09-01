import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The dating app';

  constructor(private http: HttpClient){}
  users: any;

  ngOnInit() {
    this.getusers();
  }

  getusers(){
    this.users = this.http.get("https://localhost:5001/api/users").subscribe(response =>{
      this.users = response;
    }, error => {
      console.log(error);
    });
  }




}
