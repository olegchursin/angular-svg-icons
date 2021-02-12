import { Component, Input, OnInit } from '@angular/core';

const filePath = '/assets/icons.svg';
@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css'],
})
export class SvgIconComponent implements OnInit {
  @Input() fill = '#696969';
  @Input() size = '24px';
  @Input() name: string;
  @Input() classes: string[] = [];
  @Input() viewBox = '0 0 580 580';

  public href: string;

  ngOnInit() {
    this.href = `${filePath}#${this.name}`;
  }
}
