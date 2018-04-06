import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AddressApiService } from '../../services/address-api.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  postCode: any;
  addressData: string;

  constructor(
    private route: ActivatedRoute,
    private api: AddressApiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.postCode = params.get('postcode');

      if (this.postCode.length !== 7) {
        return this.addressData = '郵便番号は7桁で入力してください';
      }

      this.api.fetchAddress(this.postCode)
      .subscribe((res) => {
        if (res.code === 200) {
          this.addressData = res.data.fullAddress;
        } else {
          this.addressData = '該当する郵便番号は存在しません';
        }
      });
    });
  }
}
