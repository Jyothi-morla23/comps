import { Component, OnInit, Input } from '@angular/core';

interface Items {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent implements OnInit {
  @Input() items: Items[] = [];
  openedItemIndex = 0;
  constructor() {}
  ngOnInit() {}

  onClick(i: number) {
    if (i === this.openedItemIndex) {
      this.openedItemIndex = -1;
    } else {
      this.openedItemIndex = i;
    }
  }
}
