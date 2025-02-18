import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from '@components/home';
import { PoetsComponent } from './poets/poets.component';
import { AuthorComponent } from './author/author.component';
import { PoemComponent } from './poem/poem.component';

const routes: Routes = [
    {
        path: '',
        component: PoetsComponent,
        pathMatch: 'full',
    },
    {
        path: 'author/:authorName',
        component: AuthorComponent,
        pathMatch: 'full',
    },
    {
        path: 'poem/:authorName/:poemTitle',
        component: PoemComponent,
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
