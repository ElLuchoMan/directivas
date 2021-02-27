import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = 'Campo requerido';
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.mensaje) {
      const mensaje = changes.mensaje.currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }
    if(changes.color){
      const color = changes.color.currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }
  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
