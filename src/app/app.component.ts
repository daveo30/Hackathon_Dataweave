import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'search';
  httpClient: HttpClient;

  startSearch (searchInput: string) {
     this.httpClient.post("url", searchInput);
  
  }

    
  
}
