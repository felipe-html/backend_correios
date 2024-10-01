import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestores-info',
  standalone: true,
  imports: [],
  templateUrl: './gestores-info.component.html',
  styleUrl: './gestores-info.component.css'
})
export class GestoresInfoComponent implements OnInit{

  constructor(private activatedRoute: ActivatedRoute){
    
  }

  ngOnInit(): void{
  }

}
