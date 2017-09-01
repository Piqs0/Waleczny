import {Directive,ElementRef,Input} from '@angular/core'
import { EventEmitter } from "events";

@Directive({selector:'focus-out'})
export class FocusOutDirective{
    constructor(el:ElementRef){
        debugger
        el.nativeElement;
    }
}