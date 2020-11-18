import { Component } from '@angular/core';

@Component({
    selector : 'app-server',
    templateUrl : './server.component.html'
})

export class ServerComponent{

    public num1:number;
    public num2:number;
    public result:number;

    addition(){
        this.result= this.num1 +this.num2;
    }

    subtract(){
        this.result= this.num1 - this.num2;

    }

    multiply(){
        this.result= this.num1 *this.num2;
    }

    division(){
        this.result= this.num1 /this.num2;
    }
}