import { Component } from '@angular/core';
import { user } from './model/user'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myangular';
  // public text:string = "arun";
  // public gender:string="";
  // public number:number=10;
  // public atanu:string="kutta demna morach**a";
  // public arun:string="localStorage.setItem('name','my name is arun')";
  // public check:boolean=false;
  // sayhello(t1:any,r1:any,r2:any){
  //   console.log('clicked');
  //   console.log(t1.value);
  //   this.text=t1.value;
  //   if(r1.checked){
  //     this.gender=r1.value;
  //   }
  //   else{
  //     this.gender=r2.value;
  //   }

  // }
  public userInfo:any = new user('','',0);

}
