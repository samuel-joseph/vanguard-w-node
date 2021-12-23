import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Fund } from "../../app/fund/fund.model";


@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
  constructor(private config: ConfigService, private router: Router) { }
  funds: any = [{}]
  arrSwitch: any = ["Overview","Performance","Price"]
  overview: boolean = true;
  performance: boolean = true;
  price: boolean = true;
  fund: Fund = {};
  error: string[] = [];
  response: any;
  hidden: string = "style:none;"

  inputValidation(form: NgForm) {
    const input = form.value
    if (!isNaN(input.expenseRatio.slice(0, input.expenseRatio.length - 1))) {
      this.error.push("Expense Ratio should be a number!")
      
    }
    if (input.expenseRatio.slice(-1) != "%") {
      this.error.push("Lacking '%' at the end of Expense Ratio.")
      
    }

  }

  registerFund(form: NgForm) {
    // this.inputValidation(form)
    this.config.addFund(form.value).subscribe(params => {
      this.fund = params
      alert(`Fund has been added to the funds!`)
      console.log(params)
      this.router.navigateByUrl(`/fund/${this.fund.id}`);
    })
    
  }

  toDelete(index: number) {
    this.config.removeFund(index).subscribe(params => {
      this.response = params;
    })
    alert(`Fund ${this.fund.name} has been deleted!`);
    this.ngOnInit();
  }

  switchNav(e: any) {
    switch (e) {
      case "Overview":
        this.overview = true
        this.performance = false
        this.price = false
        break;
      case "Performance":
        this.overview = false
        this.performance = true
        this.price = false
        break;
      case "Price":
        this.overview = false
        this.performance = false
        this.price = true
        break;
    }
  }
  

  ngOnInit(): void {
    this.switchNav("Overview");
    this.config.getFunds().subscribe(response => {
      this.funds = response;
    })
  }

}
