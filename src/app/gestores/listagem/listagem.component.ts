import { Component, OnInit } from '@angular/core';
import { Gestores } from '../gestores';
import { ClientesService } from '../../clientes.service';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [NgFor],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit{

  gestores:Gestores[] =[];

  constructor(private service:ClientesService, private router:Router){

  }

  ngOnInit(): void {
    this.service.getGestores().subscribe(resposta => this.gestores = resposta);
    
  }

  novoCadastro(){
    this.router.navigate(['/gestores-form'])
  }

}
