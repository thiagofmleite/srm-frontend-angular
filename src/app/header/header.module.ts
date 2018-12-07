import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { EconomicGroupComponent } from './economic-group/economic-group.component';
import { UserDetailsModule } from './user-details/user-details.module';

@NgModule({
    declarations: [HeaderComponent, EconomicGroupComponent],
    imports: [ CommonModule, UserDetailsModule ],
    exports: [HeaderComponent],
    providers: [],
})
export class HeaderModule {}