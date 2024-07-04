import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css'],
})
export class CollectionHomeComponent {
  data = [
    { name: 'James', age: 24, job: 'Designer', employed: 'true' },
    { name: 'Jill', age: 25, job: 'Engineer', employed: 'true' },
    { name: 'Elyse', age: 26, job: 'Doctor', employed: 'true' },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a Job?' },
  ];

  constructor() {}

  ngOnInit() {}
}
