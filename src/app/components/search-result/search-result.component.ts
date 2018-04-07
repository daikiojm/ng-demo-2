import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, filter } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { AddressApiService } from '../../services/address-api.service';
import { RouterParamService } from '../../services/router-param.service';
import { Address } from '../../types/address.type';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  postCode: string;
  addressData: string;

  constructor(private route: ActivatedRoute, private api: AddressApiService, private routerParamService: RouterParamService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          this.postCode = params.get('postcode');

          // notify router parameter.
          this.routerParamService.setRouterParam(this.postCode);

          // change stream flow by validation result.
          if (this.isValidPostCode()) {
            return this.api.fetchAddress(+this.postCode);
          } else {
            return of(null);
          }
        }),
      )
      .pipe(filter((res: Address | null) => res !== null))
      .subscribe((res: Address) => {
        if (res.code === 200) {
          this.addressData = res.data.fullAddress;
        } else {
          this.addressData = '該当する郵便番号は存在しません';
        }
      });
  }

  private isValidPostCode(): boolean {
    return /^[0-9]{7}$/.test(this.postCode) ? true : false;
  }
}
