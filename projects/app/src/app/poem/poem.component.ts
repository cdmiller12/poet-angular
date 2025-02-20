import { Component, OnInit } from '@angular/core';
import { PoetryServiceService } from '../poetry-service.service';
import { ActivatedRoute } from '@angular/router';
import { Poem } from '../types/types'

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.scss']
})
export class PoemComponent implements OnInit {
  public authorName: string;
  public poemTitle: string;
  
  public loading = false;
  public error = false;
  public errorReason = "";
  public errorStatus = "";

    constructor(
        private poetryService: PoetryServiceService,
        private activatedRoute: ActivatedRoute
      ) {
        this.authorName = this.activatedRoute.snapshot.paramMap.get('authorName') ?? '';
        this.poemTitle = this.activatedRoute.snapshot.paramMap.get('poemTitle') ?? '';
      }
    public poemLines = [];

  ngOnInit(): void {
    this.loading = true;
    this.poetryService.getPoemByAuthor(this.authorName, this.poemTitle).subscribe(data => {
      this.loading = false;
      if (!data.status) {
        this.poemLines = data[0].lines;
      }
      else {
        console.log("ERROR HAS OCCURRED.");
        console.log("Status: " + data.status);
        console.log("Reason: " + data.reason);
        this.error=true;
        this.errorStatus = data.status;
        this.errorReason = data.reason;
      }
    },
    err => {
      this.loading = false;
      this.error=true;
      this.errorReason=err;
      this.errorStatus=err;
      console.error("Error -> ", err);
    });
  }

}
