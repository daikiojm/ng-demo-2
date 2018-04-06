import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  postCode = 1600022;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  callResultComponent() {
    this.router.navigate(['search', this.postCode]);
  }
}
