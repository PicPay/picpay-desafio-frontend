import { uRemoveAllSpaces, uReverse } from '../../../util/functions/generalUtilities';

export interface InputOperationConfig {
    swapCommaDirection: 'forward' | 'backward'; 
    keyOperationFn: string;
    viewValue: string;
    keyPressed: string;
}

export class BrlCurrencyMaskHelper {
    
    removePrefix(value: string): string {
        return value.replace('R$','');
    }
    exchangeDotComma (value: string): string {
        let tempValue = value.replace(',' , ';');
        tempValue = tempValue.replace('.' , ',');
  
        const definitiveValue = tempValue.replace(';', '.');
        return definitiveValue;
    }


    mask(value: string): string { 
        const valueAgroupped = this.groupThousands(value);
        return `R$ ${valueAgroupped}`;
    }
    unmask(value: string): string {
        const valueNoPrefix = this.removePrefix(value);
        const valueNoPrefixNoGrouped = this.removeThousandsGroups(valueNoPrefix);
        return uRemoveAllSpaces( valueNoPrefixNoGrouped );
    }


    swapComma(value: string, direction: 'forward'|'backward') {
        const valueReverseArray = [...uReverse(value)];

        const commaIndex = 2;
        let elementToSwapindex;

        if(direction === 'backward') {
            elementToSwapindex = commaIndex - 1;
        } else {
            elementToSwapindex = commaIndex + 1;
        }


        const comma = valueReverseArray[commaIndex];
        valueReverseArray[commaIndex] = valueReverseArray[elementToSwapindex];
        valueReverseArray[elementToSwapindex] = comma;

        const valueFormatted = valueReverseArray.reverse().join('');

        return valueFormatted
    }
    adjustZerosLeft(value: string): string {

        const [leftSide, rightSide] = value.split(',');

        const adjustedLeftSide = leftSide.length === 0 ? '0' : Number(leftSide);

        const newValue = [ adjustedLeftSide, rightSide ].join(',');
        return newValue;
    }
    groupThousands(value: string): string {
        const [leftSide, rightSide] = value.split(',');

        const leftSideReverse = uReverse(leftSide)
        const leftSideReverseArr = leftSideReverse.match(/.{1,3}/gm);

        const adjustedLeftSide = uReverse(leftSideReverseArr.join('.'));

        const newValue = [ adjustedLeftSide, rightSide ].join(',');
        return newValue;
    }
    removeThousandsGroups(value: string): string {
        return value['replaceAll']('.', '');
    }

    addKeyPressed(value:string, key: string): string {
        return `${value}${key}`;
    }
    removeLastChar(value: string): string {
        const valueArray = [...value];
        valueArray.pop();
        return valueArray.join('');
    }


    handleInput(config: InputOperationConfig) {
        if(!!config) {
            const { swapCommaDirection, keyOperationFn, viewValue, keyPressed } = config;

            const currentValueFormatted = this.swapComma(viewValue, swapCommaDirection);

            const nextValueFormatted = this[keyOperationFn](currentValueFormatted, keyPressed);

            const nextValueFormattedAdjusted = this.adjustZerosLeft(nextValueFormatted);

            return nextValueFormattedAdjusted;
        } else {
            console.error('no configuration object for handleInput method.');
            return '';
        }
        
    }
}