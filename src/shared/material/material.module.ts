import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatSidenavModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatDividerModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
