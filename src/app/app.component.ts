import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PublicService } from './services/public.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Angular & Django Rest API (AUTH SYSTEM)';
  msg: any;

  constructor(private pService: PublicService, private authService: AuthService) {
    this.showMessage();
  }

  ngOnInit(): void { }


  showMessage(){
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
      console.log(this.msg);
    });
  }


  


}




