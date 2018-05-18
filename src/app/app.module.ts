
//Imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { DataTablesModule } from 'angular-datatables';

//Componentes
import { AppComponent } from './app.component';
import { InventarioComponent } from './inventario/inventario.component';

//Services
import { InventarioService } from './servicios/inventario.service';

//Modales
import { NuevoUsuarioModal } from './modales/nuevousuario.modal';
import { ConfirmModal } from './modales/confirm.modal';

//Extras
import { MzSelectModule, MzButtonModule, MzModalModule, MzToastModule } from 'ng2-materialize';

const appRoutes: Routes = [

  {pathMatch: 'full', path: '', component: InventarioComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    InventarioComponent,
    NuevoUsuarioModal,
    ConfirmModal
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    DataTablesModule,
    MzModalModule,
    MzButtonModule,
    MzSelectModule,
    MzToastModule
  ],
  providers: [ InventarioService ],
  bootstrap: [ AppComponent ],
  entryComponents: [ NuevoUsuarioModal, ConfirmModal ]

})
export class AppModule {

  constructor (apollo: Apollo, httpLink: HttpLink) {

    apollo.create({ link: httpLink.create({ uri: 'http://localhost:6699/api' }), cache: new InMemoryCache() })
  }

}
