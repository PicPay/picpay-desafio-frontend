import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputCurrency]'
})
export class InputCurrencyDirective {
  @Input() appInputCurrency: any;

  @HostListener("keyup", ["$event"]) public onKeyup(
    event: KeyboardEvent
  ): void {
    let value = (event.target as HTMLInputElement).value.replace(/\D/g, "").replace(/^0*/g,"") || "0";
    value = value.padStart(3,"0");
    value = this.addPontuacao(value);
    
    const htmlInput = (event.target as HTMLInputElement);
    htmlInput.value = `R$ ${value}`;
    
  }

  addPontuacao(value:string){
    let posicaoAtual = 0;
    posicaoAtual += 2;
    value = this.splice(value,value.length - posicaoAtual,0,",");
    while(true){
      posicaoAtual += 4;
      if(posicaoAtual > value.length) break;
      value = this.splice(value,value.length - posicaoAtual,0,".");
    }
    return value.replace(/^\./g,"");
    
  }

  splice(value:string,start:number, delCount:number, newSubStr:string) {
    return value.slice(0, start) + newSubStr + value.slice(start + Math.abs(delCount));
};

  constructor() { }

}
