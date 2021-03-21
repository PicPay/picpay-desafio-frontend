import { uRemoveAllSpaces, uReverse } from '../../../util/functions/generalUtilities';

export interface InputOperationConfig {
    swapCommaDirection: 'forward' | 'backward'; 
    keyOperationFn: string;
    viewValue: string;
    keyPressed: string;
}

export class BrlCurrencyMaskHelper {
    
    //unmask operations
    removePrefix(value: string): string {
        return value.replace('R$','');
    }
    exchangeDotComma (value: string): string {
        let tempValue = value.replace(',' , ';');
        tempValue = tempValue.replace('.' , ',');
  
        const definitiveValue = tempValue.replace(';', '.');
        return definitiveValue;
    }


    //mask operations
    mask(value: string): string { 
        const valueAgroupped = this.groupThousands(value);
        return `R$ ${valueAgroupped}`;
    }
    unmask(value: string): string {
        const valueNoPrefix = this.removePrefix(value);
        const valueNoPrefixNoGrouped = this.removeThousandsGroups(valueNoPrefix);
        return uRemoveAllSpaces( valueNoPrefixNoGrouped );
    }


    //general operations
    swapComma(value: string, direction: 'forward'|'backward') {
        const valueReverseArray = [...uReverse(value)];

        const commaIndex = 2;
        let elementToSwapindex;

        if(direction === 'backward') {
            elementToSwapindex = commaIndex - 1;
        } else {
            elementToSwapindex = commaIndex + 1;
        }

        // Swap operation
        const comma = valueReverseArray[commaIndex];
        valueReverseArray[commaIndex] = valueReverseArray[elementToSwapindex];
        valueReverseArray[elementToSwapindex] = comma;

        // turn swap to string again
        const valueFormatted = valueReverseArray.reverse().join('');

        return valueFormatted
    }
    adjustZerosLeft(value: string): string {

        // console.log("'value', prestes a ser separado: ", value);

        const [leftSide, rightSide] = value.split(',');
        // console.log("'value - leftSide': ", leftSide);
        // console.log("'value - rightSide': ", rightSide);

        const adjustedLeftSide = leftSide.length === 0 ? '0' : Number(leftSide);
        // const reducedRightNumber = Number(rightSide) === 0 ? `${Number(rightSide)}0` : String(Number(rightSide)) ;
        const newValue = [ adjustedLeftSide, rightSide ].join(',');
        return newValue;
    }
    groupThousands(value: string): string {
        const [leftSide, rightSide] = value.split(',');

        const leftSideReverse = uReverse(leftSide)
        const leftSideReverseArr = leftSideReverse.match(/.{1,3}/gm);

        const adjustedLeftSide = uReverse(leftSideReverseArr.join('.'));

        // const reducedRightNumber = Number(rightSide) === 0 ? `${Number(rightSide)}0` : String(Number(rightSide)) ;
        const newValue = [ adjustedLeftSide, rightSide ].join(',');
        return newValue;
    }
    removeThousandsGroups(value: string): string {
        return value['replaceAll']('.', '');
    }

    // key operations
    addKeyPressed(value:string, key: string): string {
        return `${value}${key}`;
    }
    removeLastChar(value: string): string {
        const valueArray = [...value];
        valueArray.pop();
        return valueArray.join('');
    }


    //input handler (combine previous operations)
    handleInput(config: InputOperationConfig) {
        if(!!config) {
            const { swapCommaDirection, keyOperationFn, viewValue, keyPressed } = config;

            const currentValueFormatted = this.swapComma(viewValue, swapCommaDirection);
            // console.log('currentValueFormatted: ', currentValueFormatted);

            // key(most important/differential) operation
            const nextValueFormatted = this[keyOperationFn](currentValueFormatted, keyPressed);
            // console.log('nextValueFormatted: ', nextValueFormatted);

            const nextValueFormattedAdjusted = this.adjustZerosLeft(nextValueFormatted);
            // console.log('nextValueFormattedAdjusted: ', nextValueFormattedAdjusted);

            return nextValueFormattedAdjusted;
        } else {
            console.error('no configuration object for handleInput method.');
            return '';
        }
        
    }
}