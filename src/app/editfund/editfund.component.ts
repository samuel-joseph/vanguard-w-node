import { Component, OnInit } from '@angular/core';

import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';
import { Fund } from "../../app/fund/fund.model";

@Component({
  selector: 'app-editfund',
  templateUrl: './editfund.component.html',
  styleUrls: ['./editfund.component.scss']
})
export class EditfundComponent implements OnInit {

  fund: Fund = {}
  index: any;

  constructor(private config: ConfigService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = params['id']
    })
    this.config.getFund(this.index).subscribe(params => {
      this.fund = params
    })
  }

  fundChange() {
    console.log(this.fund)
    this.config.editFund(this.index, this.fund).subscribe(response => {
      console.log(response);
    })
  }

}
