import { Component, OnInit } from '@angular/core';
import { PoetryServiceService } from '../poetry-service.service';
import { ActivatedRoute } from '@angular/router';
import { Poem } from '../types/types'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  public authorName: string;
  constructor(
    private poetryService: PoetryServiceService,
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.authorName = this.activatedRoute.snapshot.paramMap.get('authorName') ?? '';
  }

  public poems = [];

  ngOnInit(): void {
    this.poetryService.getAuthor(this.authorName).subscribe(data => {
      this.poems = data.map((item: Poem) => {
        return item.title;
      })
      this.cdr.detectChanges();
    });
  }

}
