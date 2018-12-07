import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
    declarations: [UserDetailsComponent, NotificationsComponent],
    imports: [ CommonModule ],
    exports: [UserDetailsComponent],
    providers: [],
})
export class UserDetailsModule {}