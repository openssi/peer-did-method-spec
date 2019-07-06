def compare_peer_dids(did_a, did_b):
    prefix_a = did_a[:12]
    prefix_b = did_b[:12]
    # Compare the prefix case-sensitively.
    n = cmp(prefix_a, prefix_b)
    if n == 0:
        # Don't use .localeCompare() or .toLocaleLowerCase();
        # we want raw ASCII comparison. Just normalize to
        # lower case before comparing.
        numeric_a = did_a[12:].lower()
        numeric_b = did_b[12:].lower()
        n = cmp(numeric_a, numeric_b)
    return n