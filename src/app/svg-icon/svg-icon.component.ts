import { Component, Input, OnInit } from '@angular/core';

import { svgIcons, SvgIcons } from '../../svg/icons';

@Component({
  selector: 'svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.css'],
})
export class SvgIconComponent implements OnInit {
  @Input() color = '#696969';
  @Input() size = '24px';
  @Input() name: SvgIcons | string;
  @Input() classes: string[] = [];
  @Input() viewBox = '0 0 580 580';

  public svgPath: string = '';

  ngOnInit() {
    this.svgPath = svgIcons[this.name];
  }
}
