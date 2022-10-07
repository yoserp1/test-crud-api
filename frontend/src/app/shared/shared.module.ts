import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    TopbarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    FooterComponent,
    TopbarComponent,
    NavbarComponent
  ],
})
export class SharedModule {
  static forRoot() {
    return {
      ngModule: SharedModule
    }
  }
}
