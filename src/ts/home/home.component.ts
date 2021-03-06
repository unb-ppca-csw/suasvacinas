import {Component} from "@angular/core";
import "rxjs/add/operator/pluck";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {AutenticacaoService} from "../firebase/autenticacao.service";
import {GoogleAnalytics} from "../../app/google-analytics";

@Component({
  selector: 'vacinas-home',
  styles: [`
    .bgCaderneta {
      background-color: #f4f4f7;
    }
  `],
  template: `
    <ion-header>
      <vacinas-navbar></vacinas-navbar>
    </ion-header>

    <ion-content padding [ngClass]="{bgCaderneta: (autenticado | async)?.logado}">
      <div *ngIf="(autenticado | async); else home_processado">
        
        <div *ngIf="(autenticado | async)?.logado;else home_tour">
          <vacinas-caderneta></vacinas-caderneta>
        </div>
        <ng-template #home_tour>
          <vacinas-tour-home></vacinas-tour-home>
        </ng-template>
        
      </div>
      <ng-template #home_processado>
        <vacinas-loading></vacinas-loading>
      </ng-template>
    </ion-content>

    <ion-footer>
      <vacinas-footer></vacinas-footer>
    </ion-footer>
  `
})
export class HomeComponent {

  autenticado: Observable<any>;

  constructor(private autenticacaoService: AutenticacaoService) {
    this.autenticado = autenticacaoService.isAutenticado();
    GoogleAnalytics.sendPageViewForPage('/home');
  }

}
