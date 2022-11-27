import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { MathComponent } from "./math.component";
import { TrigonometryComponent } from "./trigonometry/trigonometry.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule
      ],
      declarations: [
        MathComponent,
        TrigonometryComponent
      ],
      exports: [MathComponent]
})
export class MathModule {

}