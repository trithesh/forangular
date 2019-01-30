import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { ContainerComponent } from "./container/container.component";
import { FooterComponent } from "./footer/footer.component";
import { TasknoteComponent } from "./tasknote/tasknote.component";
import { from } from "rxjs";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {
    path: "",
    component: TasknoteComponent
  },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    TasknoteComponent,
    SignupComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
