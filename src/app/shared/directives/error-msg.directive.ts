import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  htmlElement: ElementRef<HTMLElement>;
  @Input() set color(valor: string) {
    this.htmlElement.nativeElement.style.color = valor;
  }

  @Input() set mensaje(valor: string) {
    this.htmlElement.nativeElement.innerText = valor;
  }
  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }
  ngOnInit(): void {
    // this.setColor();
    // this.setMensaje();
  }
  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.mensaje) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    // if(changes.color){
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
  }
  setEstilo() {
    this.htmlElement.nativeElement.classList.add('form-text');

  }
  // setColor(): void {
  //   this.htmlElement.nativeElement.style.color = this.color;
  // }
  // setMensaje(): void {
  //   this.htmlElement.nativeElement.innerText = this.mensaje;
  // }

}
