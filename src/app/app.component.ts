import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular király és a netacademia is';
  events = ['sziget', 'efott', 'fezen', 'szin'];
  show = true;
  klikkeljunke = false;
  inputContent: string;

  pipeDemo = [
    {
      'id': 1,
      'name': 'lacika'
    },
    {
      'id': 2,
      'name': 'Zotya'
    },
    {
      'id': 3,
      'name': 'Pityu'
    }
  ];

  toggle() {
    this.show = !this.show;
    this.inputContent = 'öt, csíp, RVT, ügyelet';
  }

  demo(ev: MouseEvent) {
    console.log(ev.screenX);
  }
}
