import { SharedModule } from './shared/shared.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [CommonModule, SharedModule],
  exports: [SharedModule]
})
export class PresentationModule {}
