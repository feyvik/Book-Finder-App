import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewComponent } from "./new/new.component";
import { ViewComponent } from "./view/view.component";

const routes: Routes = [
  { path: "new/:product", component: NewComponent },
  { path: "", component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
