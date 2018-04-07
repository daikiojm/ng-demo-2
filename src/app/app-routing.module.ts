import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchResultComponent } from './components/search-result/search-result.component';
import { TopPegeMessageComponent } from './components/top-pege-message/top-pege-message.component';

const routes: Routes = [
  { path: '', component: TopPegeMessageComponent },
  { path: 'search', redirectTo: '' },
  { path: 'search/:postcode', component: SearchResultComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
