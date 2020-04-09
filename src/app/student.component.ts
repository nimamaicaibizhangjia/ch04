import{Component,  EventEmitter, Output} from'@angular/core';

@Component({
    selector:'student',
    inputs:['name'],
    outputs:['studentSelected'],
    template:`<p (click)="onClick()">{{name}}</p>`
})
export class Student{
name: string;
 studentSelected: EventEmitter<string>;
constructor(){
    this.studentSelected=new EventEmitter();
}
onClick(){
    this.studentSelected.emit(name);
}
}