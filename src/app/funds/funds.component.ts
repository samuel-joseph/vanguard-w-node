import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
  constructor(private config: ConfigService) { }
  funds: any = [{}]
  arrSwitch: any = ["Overview","Performance","Price"]
  overview: boolean = true;
  performance: boolean = true;
  price: boolean = true;

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
