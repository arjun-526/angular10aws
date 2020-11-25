import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CountryReports } from 'src/countryReports';
import { Vacovid19Service } from '../vacovid19.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements AfterViewInit {

  constructor(private service: Vacovid19Service) { }

  ELEMENT_DATA: CountryReports[];

  displayedColumns: string[] = ['updated', 'country', 'cases', 'todayCases', 'deaths', 'todayDeaths', 'recovered', 'tests'];
  dataSource = new MatTableDataSource<CountryReports>();
  //Oninit uses
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  //
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getCountryData();
  }

  getCountryData() {
    this.service.getAllCountries().subscribe(reports => {
      console.log("info", reports)
      this.dataSource.data = reports as CountryReports[]
    });
  }

}
