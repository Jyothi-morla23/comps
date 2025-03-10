import { Component, OnInit, Input } from '@angular/core';
interface Statistic {
  value: string | number;
  label: string;
}
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  @Input() data: Statistic[] = [];

  constructor() {}

  ngOnInit() {}
}
