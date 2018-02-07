import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
// import { Response } from "../10. HttpServices/httpclientservice.service";

@Component({
    selector: 'app-template-form',
    template: `<form novalidate (ngSubmit)="saveTask(form.value)" #form="ngForm">
                    <div class="form-group">
                        <label>Name*</label>
                        <input type="text" class="form-control" name="name" [(ngModel)]="task.name" #name="ngModel" [disabled]="disabled"
                         required/>
                    </div>
                    <div class="form-group">
                        <label>Email*</label>
                        <input type="text" class="form-control" name="email" [(ngModel)]="task.email" #email="ngModel"
                        required pattern="[^ @]*@[^ @]*"/>
                    </div>
                    <button type="submit" class="btn btn-default" [disabled]="!form.valid">
                        Submit
                    </button>
                </form>`
})

export class TemplateFormComponent implements OnInit {
    task = { name: '', email: '' };
    disabled = false;
    @ViewChild('form') ngForm: NgForm;
    response: Response;

    constructor() {
        this.response = new Response();
        console.log(this.response);
    }

    ngOnInit() { }
}


export class Response {
    aemTemplates: AemTemplates[];
    responseStatus: Object;
    constructor() {
        this.aemTemplates = new Array<AemTemplates>();
        this.responseStatus = { errorDesc: '' };
    }
}

export class AemTemplates {
    TemplateID: number;
    TemplateName: string;
    constructor() {
        this.TemplateID = 0;
        this.TemplateName = '';
    }
}
