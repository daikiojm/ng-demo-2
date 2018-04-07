import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

import { RouterParamService } from '../../services/router-param.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
  postCodeDefault = 1600022;
  postCodeForm: FormGroup;

  // @see https://alligator.io/angular/takeuntil-rxjs-unsubscribe/
  destroy$: Subject<boolean> = new Subject<boolean>();

  get postCode() {
    return this.postCodeForm.controls['postCode'];
  }

  constructor(private router: Router, private fb: FormBuilder, private routerParamService: RouterParamService) {}

  ngOnInit() {
    // init form group
    this.postCodeForm = this.fb.group({
      postCode: [
        this.postCodeDefault,
        [Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('^[0-9]+$')],
      ],
    });

    // init value on the form when directly linked.
    this.routerParamService
      .getRouterParam()
      .pipe(takeUntil(this.destroy$))
      .subscribe((param: string) => {
        if (param !== this.postCode.value) {
          this.postCodeForm.setValue({
            postCode: param,
          });
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  callResultComponent(): void {
    if (this.postCode.invalid) {
      return;
    }
    this.router.navigate(['search', this.postCode.value]);
  }
}
