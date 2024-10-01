import { Component } from '@angular/core';
import { Gestores } from '../gestores';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../clientes.service';
import { response } from 'express';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-gestores-form',
  standalone: true,
  imports: [FormsModule, NgForOf,NgIf],
  templateUrl: './gestores-form.component.html',
  styleUrl: './gestores-form.component.css'
})
export class GestoresFormComponent {
  gestores!:Gestores ; 
  success: boolean = false;
  errors!: string[];

  constructor(private service: ClientesService){
    this.gestores = new Gestores();

  }

  onSubmit(){
    this.service.cadastrar(this.gestores).subscribe( response => {
      this.errors = [];
      this.gestores = response;
      this.success = true;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
      
    })
  }

}
