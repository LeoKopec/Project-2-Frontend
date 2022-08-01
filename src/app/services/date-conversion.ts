// Converts date to date only ISO format: 2000-01-01
export function dateToDateString(date: Date): string {
    const [dateOnly] = date.toISOString().split('T')
    return dateOnly;
}
