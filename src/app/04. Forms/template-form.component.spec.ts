import {
    ComponentFixture,
    ComponentFixtureAutoDetect,
    TestBed,
    async
} from '@angular/core/testing';

import { By } from "@angular/platform-browser";

import { Component, DebugElement, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { TemplateFormComponent } from "./template-form.component";

describe('TemplateFormComponent', () => {
    let component: TemplateFormComponent;
    let fixture: ComponentFixture<TemplateFormComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormsModule],
            declarations: [TemplateFormComponent]
        });

        fixture = TestBed.createComponent(TemplateFormComponent);
        component = fixture.componentInstance;
    });

    it('form invalid when empty', (done) => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const form = fixture.componentInstance.ngForm.form;
            expect(form.valid).toBeFalsy();
            done();
        });
    });

    it("create controls automatically", (done) => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            const form = fixture.componentInstance.ngForm.form;
            expect(form.get('name')).toBeTruthy();
            expect(form.get('email')).toBeTruthy();
            done();
        });
    });

    it('email field validity', (done) => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let errors = {};
            const email = fixture.componentInstance.ngForm.form.controls['email'];
            expect(email.valid).toBeFalsy();

            // Email field is required
            errors = email.errors || {};
            expect(errors['required']).toBeTruthy();

            // Set email to something
            email.setValue("test");
            errors = email.errors || {};
            expect(errors['required']).toBeFalsy();
            expect(errors['pattern']).toBeTruthy();

            // Set email to something correct
            email.setValue("test@example.com");
            errors = email.errors || {};
            expect(errors['required']).toBeFalsy();
            expect(errors['pattern']).toBeFalsy();
            done();
        });
    });

    it('name field validity', (done) => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            let errors = {};
            const name = fixture.componentInstance.ngForm.form.controls['name'];
            expect(name.valid).toBeFalsy();

            // name field is required
            errors = name.errors || {};
            expect(errors['required']).toBeTruthy();

            // Set name to something
            name.setValue("test");
            errors = name.errors || {};
            expect(errors['required']).toBeFalsy();

            done();
        });
    });

    it('submitting a form emits a user', (done) => {
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const form = fixture.componentInstance.ngForm.form;
            expect(form.valid).toBeFalsy();

            form.controls['email'].setValue("test@test.com");
            form.controls['name'].setValue("test");
            expect(form.valid).toBeTruthy();

            done();
        });
    });

    it("should disable all inputs when disabled is true", async () => {
        component.disabled = true;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
            const inputs = fixture.debugElement.queryAll(By.css('input'));
            console.log(inputs);
            inputs.forEach(element => {
                if (element.properties["ng-reflect-is-disabled"]) {
                    expect(element.properties["ng-reflect-is-disabled"]).toBe('true');
                }
            });
        });



    });

});

