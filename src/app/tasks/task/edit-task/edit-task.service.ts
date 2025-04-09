import { Output, EventEmitter } from "@angular/core";
import { Injectable } from "@angular/core";

@Injectable({providedIn : 'root'})

export class EditTaskService {
    enteredTitle="";
    enteredSummary="";
    enteredDate="";
}