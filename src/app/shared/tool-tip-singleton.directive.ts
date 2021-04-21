import { AfterViewInit, ContentChildren, Directive, QueryList } from '@angular/core';
import { createSingleton } from 'tippy.js';
import { ToolTipDirective } from './tool-tip.directive';

@Directive({
  selector: '[appToolTipSingleton]'
})
export class ToolTipSingletonDirective implements AfterViewInit {

  @ContentChildren(ToolTipDirective, {descendants: true}) elementsWithToolTip: QueryList<ToolTipDirective> 

  singletonInstance: any;

  constructor() { }

  ngAfterViewInit() {
    this.singletonInstance = createSingleton(this.getTippyInstances(), {delay: [200, 0], moveTransition: 'transform 0.2s ease-out'})

    // this.elementsWithToolTip.changes.subscribe(() => {
    //   this.singletonInstance.setInstance(this.getTippyInstances())
    // })
  }

  getTippyInstances() {
    return this.elementsWithToolTip.toArray().map((t) => {
      return t.tippyIntstance
    })
  }

}
