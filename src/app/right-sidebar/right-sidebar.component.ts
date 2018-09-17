import { Component, OnInit, Input, OnChanges, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
  inputs:['data'],
  outputs:['childevent']
})
export class RightSidebarComponent implements OnInit, OnChanges {

  intensity=[];
  relevance=[];
  likelihood=[];
  Iflag=true;
  Rflag=false;
  Lflag=false;
  childevent = new EventEmitter();
 @Input() data:object; 

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  }

  setMeasure(element,flag){
    if(element == 'relevance'){
      if(flag){
        this.childevent.emit({element:element,flag:flag});
        this.Rflag=false;
      }else{
        this.childevent.emit({element:element,flag:flag});
        this.Rflag=true
      }
    }
    if(element == 'intensity'){
      if(flag){
        this.childevent.emit({element:element,flag:flag});
        this.Iflag=false;
      }else{
        this.childevent.emit({element:element,flag:flag});
        this.Iflag=true
      }
    }
    if(element == 'likelihood'){
      if(flag){
        this.childevent.emit({element:element,flag:flag});
        this.Lflag=false;
      }else{
        this.childevent.emit({element:element,flag:flag});
        this.Lflag=true
      }
    }
  }
}


