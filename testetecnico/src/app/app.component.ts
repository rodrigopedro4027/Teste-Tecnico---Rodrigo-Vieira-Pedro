import { Component } from '@angular/core';
import { HTTP, Headers} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testetecnico';

  constructor(private http: Http){}

  contectar(){
    
  }
}
