import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { EditfundComponent } from './editfund/editfund.component';
import { AddfundComponent } from './addfund/addfund.component';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    FundComponent,
    EditfundComponent,
    AddfundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
