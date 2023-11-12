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

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CardComponent,
    FormComponent,
    CardTailsComponent,
    FormTailsComponent,
    AccordionComponent,
    AccordionTailsComponent
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
