import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableComponent} from './shared/components/data-table-component/data-table.component';
import {PaginationComponent} from './shared/components/pagination-component/pagination.component';
import {MainComponent} from './pages/main-component/main.component';
import {ThankYouComponent} from './pages/thank-you-component/thank-you.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {FlexibleConnectedPositionStrategy} from "@angular/cdk/overlay";
import {FlexLayoutModule} from "@angular/flex-layout";
import { ErrorBoxComponent } from './shared/components/error-box/error-box.component';
import { InputBoxComponent } from './shared/components/input-box/input-box.component';
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    PaginationComponent,
    MainComponent,
    ThankYouComponent,
    ErrorBoxComponent,
    InputBoxComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
