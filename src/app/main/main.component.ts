import { Component, OnInit, ElementRef, AfterViewInit,ViewChild,Input,OnChanges, DoCheck } from '@angular/core';
import { Chart } from 'chart.js';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  inputs: ['flag','chartdisplay','labels','data','number','ping']
})
export class MainComponent implements OnInit,AfterViewInit,OnChanges,DoCheck {
@ViewChild("mychart", {read: ElementRef}) mychart: ElementRef;
@Input() flag:Boolean;
@Input() chartdisplay:String;
@Input() labels:String[];
@Input() data:any;
@Input() number:any;
@Input() ping:Boolean;
 constructor(public http:HttpClient){
  
 }

  ngOnInit() {
  }
  ngAfterViewInit(){
  }


   ngOnChanges() {

     console.log("******************************");
     console.log(this.number);
      let dataSets=[];
         this.number.forEach(element => {
           dataSets.push(this.getMeasure(element));
         });
        

     var ctx = this.mychart.nativeElement;
     var chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: this.labels,
        datasets: dataSets
         }
     });
 
  }

  

   getMeasure(element){
     if(element == 'intensity'){
         return    { 
          data: this.data.intensity ,
	       	label:"intensity",
	       	borderColor:"red",
	      	fill:false
        }
     }else if(element == 'likelihood'){
         return    { 
          data: this.data.likelihood ,
	       	label:"likelihood",
	       	borderColor:"yellow",
	      	fill:false
        }
     }else if(element == 'relevance'){
         return    { 
          data: this.data.relevance ,
	       	label:"relevance",
	       	borderColor:"green",
	      	fill:false
        }
     }
   }


   ngDoCheck(){

   }



}
