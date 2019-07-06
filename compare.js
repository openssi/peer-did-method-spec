function comparePeerDIDs(didA, didB) {
    prefixA = didA.substring(0,12);
    console.log(prefixA);
    prefixB = didB.substring(0,12);
    // Compare the prefix case-sensitively.
    n = (prefixA < prefixB) ? -1 : (prefixA > prefixB ? 1 : 0);
    console.log(n);
    if (n == 0) {
        // Don't use .localeCompare() or .toLocaleLowerCase();
        // we want raw ASCII comparison.
        numericA = didA.substring(12).toLowerCase();
        numericB = didB.substring(12).toLowerCase();
        // Compare the numeric portion case-insensitively.
        n = numericA.localeCompare(numericB);
    }
    // Return < 0 if a < b, 0 if a == b, > 0 if a > b
    return n;
}