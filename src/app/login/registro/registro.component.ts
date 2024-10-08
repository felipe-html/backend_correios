import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent{

  onSubmit(){
    this.router.navigate(['/home'])
  }

  constructor(private router:Router){
    
  }

}
