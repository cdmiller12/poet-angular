import { Component, OnInit } from '@angular/core';
import { PoetryServiceService } from '../poetry-service.service';
import { ActivatedRoute } from '@angular/router';
import { Poem } from '../types/types'
import { ChangeDetectorRef } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  public authorName: string;
  public loading = false;
  public error = false;
  public errorReason = "";
  public errorStatus = "";
  constructor(
    private poetryService: PoetryServiceService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.authorName = this.activatedRoute.snapshot.paramMap.get('authorName') ?? '';
  }

  public poems = [];

  ngOnInit(): void {
    this.loading = true;
    this.poetryService.getAuthor(this.authorName).subscribe(
      data => {
        this.loading = false;
        if (!data.status) {
          this.error = false;
          this.errorReason = "";
          this.errorStatus = "";
          this.poems = data.map((item: Poem) => {
            return item.title;
          })
          this.cdr.detectChanges();
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
      }
    );
  }
}
