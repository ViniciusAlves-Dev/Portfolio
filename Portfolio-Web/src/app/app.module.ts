// src/app/app.module.ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

// Corrigindo a importação da rota (geralmente é app-routing.module.ts em projetos com NgModules)
import { AppRoutingModule } from "./app-routing.module"; 

// Importando o AppComponent, que agora NÃO será standalone
import { AppComponent } from "./app.component";

// Importando o HomeComponent, que também NÃO será standalone
import { HomeComponent } from "./home/home.component"; // <-- Importe seu HomeComponent aqui

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent // <-- O nome correto do seu componente deve ser HomeComponent, não HomeCompontent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // <-- Usando o módulo de rotas
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }