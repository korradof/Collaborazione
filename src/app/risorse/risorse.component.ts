import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-risorse',
  templateUrl: './risorse.component.html',
  styleUrls: ['./risorse.component.scss']
})
export class RisorseComponent implements OnInit {

  employees: Object;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getEmployees().subscribe(data => {
      this.employees = data
      console.log(this.employees);
  }
  );
}

}