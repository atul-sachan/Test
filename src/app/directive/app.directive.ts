import { Directive, Attribute, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from "@angular/core";
import { NgModel } from '@angular/forms';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() maskpattern: string;

    constructor(public model: NgModel) { }

    ngOnInit() {

    }

    @HostListener('keypress', ["$event"]) keypress(eventData: Event) {
        const pattern: RegExp = new RegExp(this.maskpattern);
        let lastCharArray = this.model.model.split("");
        let lastChar = lastCharArray[lastCharArray.length - 1];
        console.log(eventData);
        if (!pattern.test(eventData['key'])) {
            //lastCharArray = lastCharArray.slice(0, -1);
            console.log(lastChar);
            event.preventDefault();
            console.log(eventData);
        }

        // console.log(lastCharArray.join(""));
        // this.model.valueAccessor.writeValue(lastCharArray.join(""))
        // console.log(this.model.model);
    }

}
