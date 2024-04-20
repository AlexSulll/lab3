import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from "./components/table/table.component";
import { MainComponent } from "./components/main/main.component";

const routes: Routes = [
  { path: "", redirectTo: "main-component", pathMatch: "full" },
  { path: "main-component", component: MainComponent },
  { path: "table-component", component: TableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
