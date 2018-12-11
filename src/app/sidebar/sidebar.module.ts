import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatSidenavModule, MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SidebarComponent, SearchComponent],
    imports: [CommonModule, FormsModule, MatIconModule, MatSidenavModule, MatFormFieldModule, MatInputModule],
    exports: [SidebarComponent],
    providers: [],
})
export class SidebarModule { }