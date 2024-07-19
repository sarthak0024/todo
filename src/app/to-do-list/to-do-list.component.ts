import { Component } from '@angular/core';
import {OnInit} from '@angular/core';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})


export class ToDoListComponent {
  taskTitle:string = "";
  taskDate:Date = new Date();

  allTasks:Task[]=[];

  createTask(){
    let task:Task=
    {
      id:this.getRandomTaskId(),
      title:this.taskTitle,
      date:this.taskDate
    };
    this.allTasks.push(task);
    console.log(this.allTasks);
    localStorage.setItem("All Task",JSON.stringify(this.allTasks));
    this.taskTitle="";
    this.taskDate=new Date();
  }
  
  deleteTask(index:number)
  {
    this.allTasks.splice(index,1);
    localStorage.setItem("All Task",JSON.stringify(this.allTasks));
  }
  getRandomTaskId(): string
  {
    const characterSet="abcdefghijklmnopqrstuvwxyz0123456789"
    let res=' ';
    for(let i=0;i<5;i++){
      res=res+characterSet.charAt(Math.floor(Math.random()*characterSet.length));
    }
    return res;
  }
}
interface Task
{
  id:string,
  title:string,
  date:Date
}
