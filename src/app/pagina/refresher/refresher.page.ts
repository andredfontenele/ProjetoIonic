import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  vetor = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
  fim = 10;
    constructor() { }
  
    ngOnInit() {
    }
    rolagem(evento: any) {
      setTimeout(() => {
        this.fim += 100;
        evento.target.complete();
      },3000)
      
    }
  }