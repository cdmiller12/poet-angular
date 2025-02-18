import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-text-field',
  templateUrl: './text-field.component.html',
  styles: []
})
export class TextFieldComponent implements OnInit {
  @Input() label: string;
  input: string | undefined;

  constructor() {
    this.label = 'Placeholder Label';
  }

  ngOnInit(): void {
  }

}
