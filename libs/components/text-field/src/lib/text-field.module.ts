import { NgModule } from '@angular/core';
import { TextFieldComponent } from './text-field.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    TextFieldComponent
  ],
    imports: [
        MatFormFieldModule,
        FormsModule,
        MatInputModule
    ],
  exports: [
    TextFieldComponent
  ]
})
export class TextFieldModule { }
