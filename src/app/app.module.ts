import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SuasVacinasAppComponent } from './app.component';
import { ExemploCrudPage } from '../componentes/exemplo-crud/exemplo-crud';
import { ListPage } from '../componentes/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseModule } from "../firebase/firebase.module";
import { FirebaseProvider } from '../firebase/firebase';
import { InicialComponent } from "../componentes/inicial/inicial.component";
import {VacinasNavbarComponent} from "../componentes/tema/vacinas-navbar.component";
import {VacinasLogInComponent} from "../componentes/tema/vacinas-login.component";
import {VacinasAuthService} from "../firebase/vacinas-auth.service";
import {OpcoesComponent} from "../componentes/opcoes/opcoes";
import {OpcaoComponent} from "../componentes/opcoes/opcao.component";
import {DosesComponent} from "../componentes/doses/doses.component";
import {DescricaoVacinaComponent} from "../componentes/descricao-vacina.component";
import {LoadingDropComponent} from "../componentes/tema/vacinas-loading.component";
import {VacinasFooterComponent} from "../componentes/tema/vacinas-footer.component";
import {VacinasExtraSUSPage} from "../componentes/extra-sus/extra-sus";
import {WelderComponent} from "../componentes/welder/welder.component";
import {OpcoesFixasRepository} from "../firebase/opcoesfixas.service";
import {BannerCadastreSeComponent} from "../componentes/banner-cadastre-se/banner-cadastre-se.component";

@NgModule({
  declarations: [
    InicialComponent,
    SuasVacinasAppComponent,
    ExemploCrudPage,
    ListPage,
    OpcaoComponent,
    OpcoesComponent,
    WelderComponent,
    DosesComponent,
    DescricaoVacinaComponent,
    VacinasNavbarComponent,
    VacinasFooterComponent,
    VacinasLogInComponent,
    LoadingDropComponent,
    BannerCadastreSeComponent,
    VacinasExtraSUSPage
  ],
  imports: [
    BrowserModule,
    FirebaseModule,
    IonicModule.forRoot(SuasVacinasAppComponent,{
      backButtonText: 'Voltar',
      iconMode: 'ios',
      mode: 'ios'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SuasVacinasAppComponent,
    InicialComponent,
    ExemploCrudPage,
    ListPage,
    DescricaoVacinaComponent,
    OpcaoComponent,
    OpcoesComponent,
    WelderComponent,
    BannerCadastreSeComponent,
    DosesComponent,
    VacinasExtraSUSPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    OpcoesFixasRepository,
    VacinasAuthService
  ]
})
export class AppModule {}
