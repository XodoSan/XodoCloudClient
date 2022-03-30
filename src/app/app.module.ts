import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FileLoadPageComponent } from './Components/Pages/file-load-page/file-load-page.component';
import { MatInputModule } from '@angular/material/input';
import { RegistrationDialogComponent } from './Components/Dialogs/registration-dialog/registration-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FileLoadPageComponent,
    RegistrationDialogComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
