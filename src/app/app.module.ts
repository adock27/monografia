import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { CardComponent } from './components/card/card.component';
import { FormComponent } from './components/form/form.component';
import { CardTailsComponent } from './components/card-tails/card-tails.component';
import { FormTailsComponent } from './components/form-tails/form-tails.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionTailsComponent } from './components/accordion-tails/accordion-tails.component';
import { ComparativeComponentsComponent } from './components/comparative-components/comparative-components.component';
import { ButtonComponent } from './components/button/button.component';
import { ButtonTailsComponent } from './components/button-tails/button-tails.component';
import { TableTailsComponent } from './components/table-tails/table-tails.component';
import { AnimationTailsComponent } from './components/animation-tails/animation-tails.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OffCanvasComponent } from './components/off-canvas/off-canvas.component';
import { ModalComponent } from './components/modal/modal.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { TailwindComponent } from './pages/tailwind/tailwind.component';
import { BoostrapComponent } from './pages/boostrap/boostrap.component';
import { ComparativeComponent } from './pages/comparative/comparative.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CardComponent,
    FormComponent,
    CardTailsComponent,
    FormTailsComponent,
    AccordionComponent,
    AccordionTailsComponent,
    ComparativeComponentsComponent,
    ButtonComponent,
    ButtonTailsComponent,
    TableTailsComponent,
    AnimationTailsComponent,
    CarouselComponent,
    OffCanvasComponent,
    ModalComponent,
    InicioComponent,
    TailwindComponent,
    BoostrapComponent,
    ComparativeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
