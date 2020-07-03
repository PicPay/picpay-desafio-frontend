import { Component, OnInit, Inject, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<any>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);

    this.viewContainerRef.clear();

    const componentRef = this.viewContainerRef.createComponent(componentFactory).instance as DialogComponent;

    componentRef.dialogRef = this.dialogRef;
    componentRef.data = this.data;
  }

  close() {
    this.dialogRef.close();
  }

}
