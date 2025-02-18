import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'multi-select',
    styleUrls: ['./multi-select.component.scss'],
    templateUrl: './multi-select.component.html',
    styles: []
})

export class MultiSelectComponent implements OnInit {
    options = new FormControl('');
    @Input() optionsList: string[]
    @Input() multiSelectLabel: string

    constructor() {
        this.optionsList = ['Option 1', 'Option 2', 'Option 3'];
        this.multiSelectLabel = 'Multi Select Label';
    }

    ngOnInit() {
    }
}
