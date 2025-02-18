import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'navigation-toolbar',
    templateUrl: './navigation-toolbar.component.html',
    styleUrls: ['./navigation-toolbar.component.scss'],
})
export class NavigationToolbarComponent implements OnInit {
    public selectedItem = 'Home';

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }


    navigateToHomePage() {
        this.selectedItem = 'Home';
    }

    navigateToPoetsPage() {
        this.selectedItem = 'Poets';
    }
}
