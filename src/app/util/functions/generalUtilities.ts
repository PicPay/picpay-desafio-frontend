export function uReverse(value: string): string {
    return [...value].reverse().join('');
}

export function uRemoveAllSpaces(value: string): string {
    return value.replace(/\s/gm, '');
}

export function uIsNumber(value: any): boolean {
    return Number.isInteger(Number(value)) ;
} 