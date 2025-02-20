import { Component, OnInit } from '@angular/core';
import { PoetryServiceService } from '../poetry-service.service';

@Component({
  selector: 'app-poets',
  templateUrl: './poets.component.html',
  styleUrls: ["./poets.component.scss"]
})
export class PoetsComponent implements OnInit {
  public error = false;
  public errorReason = "";
  public errorStatus = "";
  public loading = false;
  constructor(private poetryService: PoetryServiceService) { }
  public poets = [];

  ngOnInit(): void {
    this.loading = true;
    this.poetryService.getPoets().subscribe(data => {
      this.loading = false;
      if(!data.status){
        this.poets = data.authors;
      } else {
        this.error=true;
        this.errorReason=data.reason;
        this.errorStatus=data.status;
      }
    })
  }

}
