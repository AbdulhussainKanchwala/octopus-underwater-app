import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/core/models/breadcrumbs';
import { BreadcrumbsService } from 'src/app/core/services/breadcrumbs.service';
import { fa } from 'src/app/shared/readModel/fontAwesomeConstants'

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs$: Observable<Breadcrumb[]>;
  searchIcon = fa.faSearch;
  homeIcon = fa.faHome;

  constructor(private readonly breadcrumbService: BreadcrumbsService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

  ngOnInit(): void {
  }

}
