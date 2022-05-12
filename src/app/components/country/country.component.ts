import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from 'src/app/model/country';
import { CountryServiceService } from 'src/app/service/country-service.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  data: Country[] = [];

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<Country>(this.data);

  constructor(
    private service: CountryServiceService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  findAll(){
    this.service.findlAll().subscribe(resposta=>{
      this.data = resposta
      this.dataSource = new MatTableDataSource<Country>(this.data);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
