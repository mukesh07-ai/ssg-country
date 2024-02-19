import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import {
  FilterByRegionComponent,
  CountryCardComponent,
} from '@components/index';
import { CountryMini } from '@models/index';
import { CountriesService } from '@services/index';
import { switchMap, Observable } from "rxjs";

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [FilterByRegionComponent, CountryCardComponent, AsyncPipe],
  templateUrl: './countries.component.html',
})
export class CountriesComponent implements OnInit {
  countries$: Observable<CountryMini[]> = new Observable();

  constructor(
    private countriesService: CountriesService,
    private aRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.countries$ = this.aRoute.paramMap.pipe(
      switchMap((params) => {
        const param = params.get('region');
        if (param) return this.countriesService.getAllByRegion(param);
        return this.countriesService.getAll();
      }),
    );
  }
}
