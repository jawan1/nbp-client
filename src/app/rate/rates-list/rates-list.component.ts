import { Component, OnInit } from '@angular/core';
import {RateService} from '../rate.service';
import {Information} from '../model/information';

@Component({
  selector: 'app-rates-list',
  templateUrl: './rates-list.component.html',
  styleUrls: ['./rates-list.component.less']
})
export class RatesListComponent implements OnInit {

  private information: Information;

  constructor(private rateService: RateService) { }

  ngOnInit() {
    this.getInformation();
  }

  getInformation() {
    this.rateService.getInformation().subscribe((information) => this.information = information);
  }

}
