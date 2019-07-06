function comparePeerDIDs(didA, didB) {
    a = didA.substring(0,12);
    b = didB.substring(0,12);
    // Compare the prefix case-sensitively.
    n = (a < b) ? -1 : (a > b ? 1 : 0);
    if (n == 0) {
        // Don't use .localeCompare() or .toLocaleLowerCase();
        // we want raw ASCII comparison. Just normalize to
        // lower case before comparing.
        a = didA.substring(12).toLowerCase();
        b = didB.substring(12).toLowerCase();
        n = (a < b) ? -1 : (a > b ? 1 : 0);
    }
    return n;
}