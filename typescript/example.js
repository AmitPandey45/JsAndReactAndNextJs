function welcomePeople(names) {
    if (Array.isArray(names)) {
        console.log("welcome ".concat(names.join(' and ')));
    }
    else {
        console.log("welcome lone traveller ".concat(names));
    }
}
welcomePeople('Amit');
welcomePeople(['Amit', 'Anurag', 'Deepanshu']);
