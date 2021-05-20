import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal.component';

@NgModule({
    imports: [CommonModule],
    declarations: [ModalComponent],
    exports: [ModalComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ModalModule { }
