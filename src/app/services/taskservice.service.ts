import { Time } from '@angular/common';
import { Injectable } from '@angular/core';
import { Tasks } from '../taskmodel/taskmodel.module';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 public itempriority:string="High"
 public priority:string[]=["Low","Medium","High"]
 public items:string[][]=[
   ["Task1","01:00","Low"],
   ["Task2","05:00","Medium"]
 ]
 public itemsStage:string[][]=[]
 
 constructor() { }

 setValue(itempriority:string,itemtask:string,itemtime:string){
  this.items.push([itemtask,itemtime,itempriority])
  alert(this.items.length)
}

}