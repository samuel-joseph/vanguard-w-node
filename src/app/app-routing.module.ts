import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FundsComponent } from './funds/funds.component';
import { FundComponent } from './fund/fund.component';
import { EditfundComponent } from './editfund/editfund.component';
import { AddfundComponent } from './addfund/addfund.component';

const routes: Routes = [
  {path: "", component: FundsComponent },
  {path: "funds", component: FundsComponent },
  { path: "fund/:id", component: FundComponent },
  { path: "fund/:id/edit", component: EditfundComponent },
  {path: "add", component:AddfundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
