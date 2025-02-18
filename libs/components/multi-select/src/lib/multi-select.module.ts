import { NgModule } from '@angular/core';
import { MultiSelectComponent } from './multi-select.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    MultiSelectComponent
  ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        CommonModule,
        MatAutocompleteModule,
        ReactiveFormsModule
    ],
  exports: [
    MultiSelectComponent,
  ],
})
export class MultiSelectModule { }
