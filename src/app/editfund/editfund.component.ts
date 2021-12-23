import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Fund } from "../../app/fund/fund.model";

@Component({
  selector: 'app-editfund',
  templateUrl: './editfund.component.html',
  styleUrls: ['./editfund.component.scss']
})
export class EditfundComponent implements OnInit {

  fund: Fund = {}
  index: any;

  constructor(private config: ConfigService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.index = params['id']
    })
    this.config.getFund(this.index).subscribe(params => {
      this.fund = params
    })
  }

  fundChange() {
    this.config.editFund(this.index, this.fund).subscribe(response => {
      this.router.navigateByUrl(`/fund/${this.fund.id}`);
    })
  }

}
