import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() public text: string;
  @Input() public isLoading: boolean = false;
  @Output() public buttonClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onButtonClick(): void {
    if (!this.isLoading) {
      this.buttonClick.emit();
    }
  }
}
