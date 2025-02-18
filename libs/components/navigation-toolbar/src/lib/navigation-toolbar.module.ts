import { NgModule } from '@angular/core';
import { NavigationToolbarComponent } from './navigation-toolbar.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    NavigationToolbarComponent
  ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

    ],
  exports: [
    NavigationToolbarComponent
  ]
})
export class NavigationToolbarModule { }
