import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;

  items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is' },
    {
      title: 'What does an orange taste like?',
      content: 'An orange tastes like orange',
    },
    {
      title: 'What color is the cat',
      content: 'The cat is an orange color',
    },
  ];

  constructor() {}
  ngOnInit() {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
