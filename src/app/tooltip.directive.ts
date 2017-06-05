import { Directive, ElementRef, Renderer, Input, OnInit } from '@angular/core';
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements OnInit {
  @Input() direccion: string;
  @Input() texto: string;
  constructor(private el: ElementRef, private renderer: Renderer) {
  }
  ngOnInit() {
    this.renderer.setElementAttribute(this.el.nativeElement, 'aria-label', this.texto);
    this.renderer.setElementClass(this.el.nativeElement, 'hint--' + this.direccion, true);
  }
}
