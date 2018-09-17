import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  data:object = [];
  flag:Boolean = true;
  chartdisplay:String = "none";
  number=[];
  ping:Boolean=true;
  constructor(public http:HttpClient){
       this.http.get("http://localhost:4200/getAllData").subscribe((response)=>{
         this.data = response;
         this.flag = false;
         this.chartdisplay = "block";
         this.number.push('intensity');
       })
  }

  setMeasure(data){
    
      if(data.flag){       
        this.number.splice( this.number.indexOf(data.element), 1 );
      }else
      {
        this.number.push(data.element);
      }
      this.ping=!this.ping;
  }


}
