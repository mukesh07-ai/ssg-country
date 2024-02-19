import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { CountryMini } from '@models/index';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './country-card.component.html',
})
export class CountryCardComponent {
  @Input({ required: true }) country: CountryMini | null = null;
}
