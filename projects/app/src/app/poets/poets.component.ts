import { Component, OnInit } from '@angular/core';
import { PoetryServiceService } from '../poetry-service.service';

@Component({
  selector: 'app-poets',
  templateUrl: './poets.component.html',
  styleUrls: ['./poets.component.scss']
})
export class PoetsComponent implements OnInit {

  constructor(private poetryService: PoetryServiceService) { }
  public poets = [];

  ngOnInit(): void {
    this.poetryService.getPoets().subscribe(data => {
      this.poets = data.authors;
    })
  }

}
