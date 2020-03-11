import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() color: string;
  @Input() filled: string;
  @Input() amount: string;
  @Input() shape: string;
  constructor() { }

  ngOnInit() {
  }

}
