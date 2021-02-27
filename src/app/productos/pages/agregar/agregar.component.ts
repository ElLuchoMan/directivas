import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  texto1: string = 'Alejandro Torres';
  color: string = 'red';
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.cambiarColor();
    this.cambiarNombre();
  }
  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;

  }
  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }
  cambiarColor() {
    this.color = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
  }
}
