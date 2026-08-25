function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let frq = new Map<string, number>();

    for (let i = 0; i < s.length; i++) {
        frq.set(s[i], (frq.get(s[i]) || 0) + 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (!frq.get(t[i])) {
            return false;
        }

        frq.set(t[i], frq.get(t[i])! - 1);
    }

    return true;
}