import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [SidebarComponent]
})
export class SharedModule { }
