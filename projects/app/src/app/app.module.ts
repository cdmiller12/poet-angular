import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NavigationToolbarModule} from "@components/navigation-toolbar";
import { PoetsComponent } from './poets/poets.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthorComponent } from './author/author.component';
import { PoemComponent } from './poem/poem.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
    declarations: [
        AppComponent,
        PoetsComponent,
        AuthorComponent,
        PoemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatSelectModule,
        HttpClientModule,
        CommonModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        NavigationToolbarModule,
        MatListModule,
        MatCardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
