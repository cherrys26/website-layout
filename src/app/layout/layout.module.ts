import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { MaterialModule } from '../shared/material.module';

import { LayoutModuleComponent } from './layout-module.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


const routes: Routes = [
  {
    path: '', component: LayoutModuleComponent
  }
]

@NgModule({
  declarations: [LayoutModuleComponent, ToolbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    
  ]
})
export class LayoutModule { }
