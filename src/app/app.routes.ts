import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { GestoresFormComponent } from './gestores/gestores-form/gestores-form.component';
import { ListagemComponent } from './gestores/listagem/listagem.component';
import { GestoresInfoComponent } from './gestores/gestores-info/gestores-info.component';
import { UploadDataComponent } from './gestores/upload-data/upload-data.component';
import { NovaEntradaComponent } from './patrimonio/entradas/nova-entrada/nova-entrada.component';
import { EntradaCompraComponent } from './patrimonio/entradas/entrada-compra/entrada-compra.component';
import { OutrasEntradaComponent } from './patrimonio/entradas/outras-entrada/outras-entrada.component';
import { ListaEntradasComponent } from './patrimonio/entradas/lista-entradas/lista-entradas.component';
import { HistoricoPatrimonioComponent } from './patrimonio/entradas/historico-patrimonio/historico-patrimonio.component';
import { ListaTransferenciaComponent } from './patrimonio/transferencia/lista-transferencia/lista-transferencia.component';
import { TransferenciaExternaComponent } from './patrimonio/transferencia/transferencia-externa/transferencia-externa.component';
import { TransferenciaInternaComponent } from './patrimonio/transferencia/transferencia-interna/transferencia-interna.component';
import { LinhaComponent } from './home/graficos/linha/linha.component';
import { GraficosComponent } from './relatorios/graficos/graficos.component';
import { EntradaComponent } from './login/entrada/entrada.component';

export const routes: Routes = [
    {path:'app-entrada', component: EntradaComponent},
    {path: 'home', component: HomeComponent},
    {path: 'gestores-form', component: GestoresFormComponent},
    {path:'app-listagem', component: ListagemComponent},
    {path:'app-upload-data', component: UploadDataComponent},
    {path:'app-gestores-info/:id', component: GestoresInfoComponent},
    {path:'app-nova-entrada', component: NovaEntradaComponent},
    {path:'app-linha', component: LinhaComponent},
    {path:'app-entrada-compra', component:EntradaCompraComponent},
    {path:'app-outras-entrada', component:OutrasEntradaComponent},
    {path:'app-lista-entradas', component:ListaEntradasComponent},
    {path:'app-historico-patrimonio', component:HistoricoPatrimonioComponent},
    {path:'app-lista-transferencia', component: ListaTransferenciaComponent},
    {path:'app-transferencia-externa', component: TransferenciaExternaComponent},
    {path:'app-transferencia-interna', component: TransferenciaInternaComponent},
    {path:'app-graficos', component:GraficosComponent},



];
