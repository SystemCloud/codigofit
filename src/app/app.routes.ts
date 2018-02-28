import { RouterModule, Routes } from '@angular/router';
import {
	LoginComponent,
	DashboardComponent,
	MainComponent
} from "./components/index.paginas";


const app_routes: Routes = [	
	{ path: 'home', component: LoginComponent},
	{ path: 'admin', component: LoginComponent},
	{ path: '', pathMatch: 'full', redirectTo: 'home'},
	{ path: 'main', component: MainComponent},
	{ path: 'super', pathMatch: 'full', redirectTo: 'main'}
	{ path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash: true});