function dateToDateString(date: Date): string {
    const [dateOnly] = date.toISOString().split('T')
    return dateOnly;
}
