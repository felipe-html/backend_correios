import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada',
  standalone: true,
  imports: [],
  templateUrl: './entrada.component.html',
  styleUrl: './entrada.component.css'
})
export class EntradaComponent {

  onSubmit(){
    this.router.navigate(['/home'])
  }

  constructor(private router:Router){
    
  }

}
