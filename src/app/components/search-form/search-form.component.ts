import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AddressApiService } from '../../services/address-api.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  postCode = 1600022;
  addressData;

  constructor(
    private addressApiService: AddressApiService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClickFetchAddress() {
    this.addressApiService.fetchAddress(this.postCode)
    .subscribe((res) => {
      if (res.code === 200) {
        this.addressData = res.data.fullAddress;
      } else {
        this.addressData = '該当する郵便番号は存在しません';
      }
      this.router.navigate(['search', this.postCode, this.addressData]);
    });
  }
}
