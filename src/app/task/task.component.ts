import { Component,Input,Output,EventEmitter ,OnInit } from '@angular/core';
import { DataService } from '../services/taskservice.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() title:string=""
  @Input("items") values:string[]=[]
  @Output('receive') send:EventEmitter<string>=new EventEmitter<string>();
  constructor(public ds:DataService) {
      
  }
  ngOnInit(): void {
  }
  sendMessage(x:string):void{
    this.send.emit(x);
}
}
