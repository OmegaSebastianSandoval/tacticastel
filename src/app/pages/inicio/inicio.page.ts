import { Component, OnInit } from '@angular/core';

interface Componente {
  icon : string;
   name : string;
   redirecTo : string;  
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[]=[
    {
      icon: 'person-circle-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon: 'logo-apple-appstore',
      name: 'Alerta',
      redirecTo: '/alert'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
