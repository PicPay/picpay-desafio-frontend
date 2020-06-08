import { Component } from "@angular/core";

import payIcon from "src/assets/ppay-icon.png";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
})
export class HeaderComponent {
  payIcon = payIcon;

  appName = "SendPay";
  appDescription = "Sua plataforma de envio de dinheiro";
}
