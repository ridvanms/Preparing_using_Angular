import { Directive,ElementRef,Renderer2,OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string = 'transparent'
  @Input() highlightedColor: string = 'red'

  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;
  @HostBinding('style.color') color:string = 'black'

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit():void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','red')
    // this.renderer.setStyle(this.elRef.nativeElement, 'color','white')
  }

  @HostListener("mouseenter") mouseover(eventData:Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','red')
      this.backgroundColor = this.highlightedColor
      this.color = 'white'
    }
  @HostListener('mouseleave') mouseleave(eventData:Event){
      // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor','transparent')
      this.backgroundColor = this.defaultColor
      this.color = 'black'
    }
}
