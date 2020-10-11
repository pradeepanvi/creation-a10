import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const Material = [MatInputModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [Material],
  exports: [Material],
  providers: [],
})
export class MaterialModule {}
