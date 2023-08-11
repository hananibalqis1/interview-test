import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title!: string;
  @Input() margin? = '16px 0 16px 3px';
  @Input() fontSize? = '32px';

  constructor(){}

  ngOnInit(): void {
  }

}
