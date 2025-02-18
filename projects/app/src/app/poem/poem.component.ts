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
    constructor(
        private poetryService: PoetryServiceService,
        private activatedRoute: ActivatedRoute
      ) {
        this.authorName = this.activatedRoute.snapshot.paramMap.get('authorName') ?? '';
        this.poemTitle = this.activatedRoute.snapshot.paramMap.get('poemTitle') ?? '';
      }
    public poemLines = [];

  ngOnInit(): void {
    this.poetryService.getPoemByAuthor(this.authorName, this.poemTitle).subscribe(data => {
      this.poemLines = data[0].lines;
      const te = 0;
    });
    const test = 0;
  }

}
