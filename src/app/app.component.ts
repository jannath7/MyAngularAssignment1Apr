import { Component } from '@angular/core';
import { DataService } from './services/taskservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngularAssignment1Apr';
  message:string="nothing"
  currentPriority="Medium"
  Priorities=["Low","Medium","High"]
  public itemtask:string="Task1"
  public itemtime:string="06:00"
  constructor(public ds:DataService ){
   // ds.setColor(this.bcolor)
}
onClick(){ 
 // this.ds.setColor(this.bcolor)
 this.ds.setValue(this.currentPriority,this.itemtask,this.itemtime)
}

receiveMessage(message:string):void
{
 this.message=message
}
}
