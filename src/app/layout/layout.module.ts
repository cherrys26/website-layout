import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'

import { MaterialModule } from '../shared/material.module';

import { LayoutModuleComponent } from './layout-module.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopComponent } from './components/top/top.component';
import { MiddleComponent } from './components/middle/middle.component';
import { TestemonialsComponent } from './components/testemonials/testemonials.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetStartedComponent } from './components/get-started/get-started.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '', component: LayoutModuleComponent
  }
]

@NgModule({
  declarations: [LayoutModuleComponent, ToolbarComponent, TopComponent, MiddleComponent, TestemonialsComponent, FooterComponent, GetStartedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class LayoutModule { }
