
//Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

//Componentes
import { AppComponent } from './app.component';
import { InventarioComponent } from './inventario/inventario.component'

//Services
import { InventarioService } from './servicios/inventario.service'

//Modales
import { NuevoUsuarioModal } from './modales/nuevousuario.modal'

const appRoutes: Routes = [

  {pathMatch: 'full', path: '', component: InventarioComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    NuevoUsuarioModal
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [ InventarioService ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor (apollo: Apollo, httpLink: HttpLink) {

    apollo.create({ link: httpLink.create({ uri: 'http://localhost:6699/api' }), cache: new InMemoryCache() })
  }

}
