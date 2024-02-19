import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { REGIONS } from '@constants/index';

@Component({
  selector: 'app-filter-by-region',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './filter-by-region.component.html',
})
export class FilterByRegionComponent implements OnInit {
  readonly regions = REGIONS;
  activeRegion: string | null = null;

  constructor(private aRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.aRoute.paramMap.subscribe((params) => {
      this.activeRegion = params.get('region');
    });
  }
}
