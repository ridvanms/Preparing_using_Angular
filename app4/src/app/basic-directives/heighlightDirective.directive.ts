import {Directive,ElementRef,OnInit} from '@angular/core';

@Directive({
    selector:'[heighLightDirective]'
})

export class heighLightDirective implements OnInit{
    constructor(private elementRef:ElementRef) {}

    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    }
}