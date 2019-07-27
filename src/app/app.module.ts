import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NotesComponent } from "./notes/notes.component";
import { EditComponent } from "./edit/edit.component";
import { AppRoutingModule } from ".//app-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AppComponent, NotesComponent, EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: "edit-page",
        component: EditComponent,
        pathMatch: "full"
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
