import { Injectable } from "@angular/core";
import { type TaskData } from "./tasks/new-task/new-task.model";
import { type Task } from "./tasks/task/task.model";

@Injectable({providedIn : "root"})
export class TasksService {
    private tasks : Task[] = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't2',
          userId: 'u3',
          title: 'Build first prototype',
          summary: 'Build a first prototype of the online shop website',
          dueDate: '2024-05-31',
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Prepare issue template',
          summary:
            'Prepare and describe an issue template which will help with project management',
          dueDate: '2024-06-15',
        },
        {
          id: 't4',
          userId: 'u2',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't5',
          userId: 'u4',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't6',
          userId: 'u5',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        },
        {
          id: 't7',
          userId: 'u6',
          title: 'Master Angular',
          summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
          dueDate: '2025-12-31',
        }
    ];

    private completedTasks : Task[] = [
    ]

    constructor() {
      const tasks = localStorage.getItem('tasks');
      const completedTasks = localStorage.getItem('completedTasks');
  
      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
      if (completedTasks) {
        this.completedTasks = JSON.parse(completedTasks);
      }
    }

    getUserTasks(userId : string) {
        return this.tasks.filter((task) => task.userId === userId);
    }

    getUserCompletedTasks(userId : string) {
      return this.completedTasks.filter((completedTask) => completedTask.userId === userId);
    }

    addTask(taskData : TaskData, userId : string) {
        this.tasks.push({
            id : new Date().getSeconds().toString(),
            userId : userId,
            title : taskData.title,
            summary : taskData.summary,
            dueDate : taskData.dueDate
          });
        this.saveTasks();
    }

    removeTask(taskId : string) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        this.saveTasks();
    }

    completeTask(taskId : string) {
      let completedTask = this.tasks.find((task) => task.id === taskId);
      if(completedTask) {
        this.completedTasks.push(completedTask);
      }
      this.tasks = this.tasks.filter((task) => task.id !== taskId);
      this.saveTasks();
    }

    IncompleteTask(taskId : string) {
      let IncompletedTask = this.completedTasks.find((task) => task.id === taskId);
      if(IncompletedTask) {
        this.tasks.push(IncompletedTask);
      }
      this.completedTasks = this.completedTasks.filter((task) => task.id !== taskId);
      this.saveTasks();
    }

    // removeCompletedTask(taskId : string) {
    //   this.completedTasks = this.completedTasks.filter((completedTask) => completedTask.id !== taskId);
    //   this.saveTasks();
    // }

    editTask(taskData : Task) {
      let updateTask = this.tasks.find((task) => task.id === taskData.id);
      if(taskData.title && taskData.dueDate) {
        updateTask!.title = taskData.title;
        updateTask!.summary = taskData.summary;
        updateTask!.dueDate = taskData.dueDate;
        this.saveTasks();
      }
      else if(taskData.title && !taskData.dueDate) {
        alert("Please enter a valid date");
      }
      else if(taskData.dueDate && !taskData.title) {
        alert('Please enter a valid title');
      }
      else {
        alert("Please enter the valid date and title");
        return;
      }
    }

    private saveTasks() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
    }
}
