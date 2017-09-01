import {Directive,ElementRef,Input, Output,EventEmitter} from '@angular/core'


@Directive({selector:'[focus-out]'})
export class FocusOutDirective{
    inputs: any[];
    constructor(private el: ElementRef) {
       
    }

    @Output() focusOut:EventEmitter<any>=new EventEmitter();
    @Output() focusIn:EventEmitter<any>=new EventEmitter();

    ngAfterViewInit() {
        setTimeout(()=>{
        this.inputs = this.el.nativeElement.getElementsByTagName('input');
        this.doSomethingOnInputs(this.inputs)},100);
    }

    doSomethingOnInputs(inputs: any[]) {
        let that=this;
        for (let input of inputs){  
            input.addEventListener ('focusout',function(){that.onFocusOut(input,that)})
            input.addEventListener('focusin',function(){ that.onFousIn(input,that)})
         }
    }

    onFocusOut(input,that){
        input.style.backgroundColor='red'
        that.focusOut.emit(event);
        
    }

    onFousIn(input,that){       
        input.style.backgroundColor='yellow'
        that.focusIn.emit(event);
    }

}