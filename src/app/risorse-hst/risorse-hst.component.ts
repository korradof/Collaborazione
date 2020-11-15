import {HttpClient} from '@angular/common/http';
import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {employee, employees, HttpService } from '../http.service';
/**
 * @Title Test tabelle employee */  

@Component({
  selector: 'app-risorse-hst',
  templateUrl: './risorse-hst.component.html',
  styleUrls: ['./risorse-hst.component.scss']
})
export class RisorseHstComponent implements AfterViewInit {
  displayedColumns: string[] = ['IDEmployee', 'FirstName', 'LastName'];
  exampleDatabase: HttpService | null;
  //employees: Object;
  data: employee [] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
    
  
  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit() {
  //  this._http.getEmployees().subscribe(data => {
  //    this.employees = data
  //    console.log(this.employees);

    this.exampleDatabase = new HttpService (this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getEmployees(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          //this.resultsLength = data.total_count;

         // return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.exampleDatabase.getEmployees.prototype = data);
      console.log (this.data)
      //console.log(this.exampleDatabase)
  }

}
