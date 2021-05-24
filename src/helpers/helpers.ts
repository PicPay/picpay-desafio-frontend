export function formatDate(): string {
    return new Intl.DateTimeFormat("pt-br", {}).format(new Date())
}

export function formatHour(): string {
    return new Date().toLocaleTimeString("pt-br");
}

export function formartCurrency(value: number): string {
    return new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
    }).format(value)
}