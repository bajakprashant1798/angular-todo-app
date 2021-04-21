import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import tippy from 'tippy.js';

@Directive({
  selector: '[appToolTip]'
})
export class ToolTipDirective implements AfterViewInit, OnChanges{

  @Input('appToolTip') tooltipContent: string;

  public tippyIntstance: any;

  constructor(private elRef: ElementRef) { }

  ngAfterViewInit(){
    this.tippyIntstance = tippy(this.elRef.nativeElement, {
      content: this.tooltipContent
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['tooltipContent']) { // input content has changed
      this.updateToolTipContent()
    }
  }

  updateToolTipContent() {
    if (this.tippyIntstance) {
      this.tippyIntstance.setContent(this.tooltipContent)
    }
  }
}
