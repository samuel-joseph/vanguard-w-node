import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


import { Fund } from "../../app/fund/fund.model";
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.scss']
})
export class AddfundComponent implements OnInit {

  constructor(private config: ConfigService, private router: Router) { }
  fund: Fund = {};
  ngOnInit(): void {
  }

  registerFund(form: NgForm) {
    this.config.addFund(form.value).subscribe(params => {
      this.fund = params
      alert(`Fund has been added to the funds!`)
      console.log(params)
      this.router.navigateByUrl(`/fund/${this.fund.id}`);
    })
    
  }

}
