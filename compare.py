def compare_peer_dids(did_a, did_b):
    prefix_a = did_a[:12]
    prefix_b = did_b[:12]
    # Compare the prefix case-sensitively.
    n = -1 if prefix_a < prefix_b else (1 if prefix_a > prefix_b else 0)
    if n == 0:
        # Don't use .localeCompare() or .toLocaleLowerCase();
        # we want raw ASCII comparison. Just normalize to
        # lower case before comparing.
        numeric_a = did_a[12:].lower()
        numeric_b = did_b[12:].lower()
        n = -1 if numeric_a < numeric_b else (1 if numeric_a > numeric_b else 0)
    return n