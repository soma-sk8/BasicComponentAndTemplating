import {Component} from '@angular/core';
import {EventModel} from './event-model';

@Component(
  {
    selector: 'app-listdemo',
    templateUrl: './listdemo.component.html',
    styleUrls: ['./listdemo.component.css']
  }
)
export class ListdemoComponent {
  // XSS challenge, image tag src, miau szöveggel alert!
  events: EventModel[];

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'http://ciganyvendeglo.hu/0/images/sziget.png'
      },
      {
        id: 2,
        name: 'fezem',
        pic: 'http://hammerworld.hu/images/upload/FEZ17WHITE.jpg'
      },
      {
        id: 3,
        name: 'rockmaraton',
        pic: 'http://hammerworld.hu/images/upload/01arokka17.jpg'
      }
    ];
    console.log('megjött a listdemo cmp');
    // const puf = this.events.reduce((x: EventModel, y: EventModel) => {
    //   return x.id > y.id ? x : y;
    //   // if (x.id > y.id) {
    //   //   return x;
    //   // } else {
    //   //   return y;
    //   // }
    // }).id;
    // console.log(puf);
  }

  add(newEventNameInput: HTMLInputElement) {
    const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
    this.events = [...this.events, new EventModel(maxId + 1, newEventNameInput.value)];
    newEventNameInput.value = '';
  }

  delete(id: number) {
    // filter[bemenet] (vizsgálat) -> [eredmény]
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
}
