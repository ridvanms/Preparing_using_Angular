import { Directive,ElementRef,Renderer2,OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit():void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','red')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color','white')
  }
  @HostBinding('style.backgroundColor') backgroundColor: string= 'transparent'
  @HostBinding('style.color') color:string = 'black'

  @HostListener("mouseenter") mouseover(eventData:Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','red')
      this.backgroundColor = 'red'
      this.color = 'white'
    }
  @HostListener('mouseleave') mouseleave(eventData:Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','transparent')
      this.backgroundColor = 'transparent'
      this.color = 'black'
    }
}
