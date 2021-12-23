import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfigService } from '../config.service';
import { Fund } from "./fund.model";

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {
  fund: Fund = {};
  myModel: any;
  index: any;
  response: any;
  constructor(private router: Router,private route: ActivatedRoute, private config: ConfigService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = params['id'];
      this.config.getFund(params['id']).subscribe((data) => {
        this.fund = data;
      })
    })
  }

  toEdit() {
    this.router.navigateByUrl(`/fund/${this.fund.id}/edit`);
  }

  toDelete() {
    this.config.removeFund(this.index).subscribe(params => {
      this.response = params;
    })
    alert(`Fund ${this.fund.name} has been deleted!`);
    this.router.navigateByUrl(`/funds`);
  }

}
