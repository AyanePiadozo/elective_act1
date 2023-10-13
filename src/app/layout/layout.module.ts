import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { TopnavComponent } from '../component/topnav/topnav.component';
import { SidenavComponent } from '../component/sidenav/sidenav.component';
import { ScreenComponent } from '../component/screen/screen.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TopnavComponent,
    SidenavComponent,
    ScreenComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,

  ]
})
export class LayoutModule { }
