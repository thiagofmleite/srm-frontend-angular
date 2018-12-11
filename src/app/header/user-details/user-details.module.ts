import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
    declarations: [UserDetailsComponent, NotificationsComponent],
    imports: [ CommonModule, MatMenuModule, MatButtonModule, MatIconModule ],
    exports: [UserDetailsComponent],
    providers: [],
})
export class UserDetailsModule {}