import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FileLoadPageComponent } from "./Components/Pages/file-load-page/file-load-page.component";
import { MainPageComponent } from "./Components/Pages/main-page/main-page.component";

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'file_page', component: FileLoadPageComponent}
  ];
  
  @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
  export class AppRoutingModule {}