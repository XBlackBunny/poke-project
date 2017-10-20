import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../app.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
    { path: 'pokemon', component: DashboardComponent },
    { path: '', redirectTo: 'pokemon', pathMatch: 'full' }
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})

export class RoutingModule { }
