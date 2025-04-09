import { Output, EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})

export class EditTaskService {
    enteredTitle="";
    enteredSummary="";
    enteredDate="";

    updateTask(title : string, summary : string, date : string) {
        this.enteredTitle = title;
        this.enteredSummary = summary;
        this.enteredDate = date;

    }
}