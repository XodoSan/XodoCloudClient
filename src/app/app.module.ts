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
import { DialogOptionsComponent } from './Components/Dialogs/dialog-options/dialog-options.component';
import { LoginDialogComponent } from './Components/Dialogs/login-dialog/login-dialog.component';
import { MainPageComponent } from './Components/Pages/main-page/main-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FileLoadPageComponent,
    RegistrationDialogComponent,
    DialogOptionsComponent,
    LoginDialogComponent,
    MainPageComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
  ],
  bootstrap: [AppComponent],
  exports: [AppRoutingModule]
})
export class AppModule { }
