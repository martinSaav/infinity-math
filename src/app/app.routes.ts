import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { HeadquartersComponent } from './headquarters/headquarters.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent, data: {title: 'Bienvenidos estudiantes!'} }, // Ruta raíz (INICIO)
    { path: 'classes', component: ClassesComponent, data: {title: 'Clases'} },
    { path: 'headquarters', component: HeadquartersComponent, data: {title: 'Donde estamos'} },
    { path: 'contact', component: ContactComponent, data: {title: 'Contacto'} },
    { path: '**', redirectTo: '', pathMatch: 'full', data: {title: 'Bienvenidos estudiantes!'} } // Redirige cualquier ruta desconocida a INICIO]
];
