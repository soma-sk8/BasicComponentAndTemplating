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
  modifyEvent: EventModel;

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
    this.modifyEvent = new EventModel('');
  }

  save(newEventNameInput: HTMLInputElement, newEventPicInput: HTMLInputElement) {
    if (this.modifyEvent.id === 0) {
      // itt tudjuk, hogy új elemet hozunk létre
      // biztosítjuk, hogy ID=0 legyen
      const maxId = this.events.reduce((x, y) => x.id > y.id ? x : y).id;
      this.events = [...this.events, new EventModel(newEventNameInput.value, maxId + 1, newEventPicInput.value)];
    } else {
      // itt tudjuk, hogy EDIT szakasz van, meg kell keresni a megfelelő elemet az ID alapján
      this.events = this.events.map((ev) => {
        if (ev.id === this.modifyEvent.id) {
          // itt tudjuk, hogy ezt az elemet kell szerkeszteni
          return {
            id: ev.id,
            name: newEventNameInput.value,
            pic: newEventPicInput.value
          };
        } else {
          // itt tudjuk, hogy nem akarunk módosítnai
          return ev;
        }
      });
      // takarítsunk fel magunk után
      this.modifyEvent = new EventModel('');
    }
    newEventNameInput.value = '';
    newEventPicInput.value = '';
  }

  edit(id: number) {
    // ha biztos hogy van ilyen id
    // ha tudom hogy mindíg csak 1 ilyen van
    this.modifyEvent = this.events.filter((ev) => ev.id === id)[0];
  }

  delete(id: number) {
    // filter[bemenet] (vizsgálat) -> [eredmény]
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }
}
