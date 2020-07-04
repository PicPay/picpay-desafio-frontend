import { Component, OnInit, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogData } from './dialog-data';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<any>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    this.instanceComponent();
  }

  instanceComponent() {
    if (this.data && this.data.component) {
      const componentRef = this.createComponent();

      componentRef.dialogRef = this.dialogRef;
      componentRef.data = this.data;
    }
  }

  createComponent(): any {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);

    this.viewContainerRef.clear();

    const componentRef = this.viewContainerRef.createComponent(componentFactory).instance;

    return componentRef;
  }

  close() {
    this.dialogRef.close();
  }

}
