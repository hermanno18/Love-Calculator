function calculateCompatibility(name1, name2) {
    // Step 1: Convert names to lowercase
    let name1Lower = name1.toLowerCase();
    let name2Lower = name2.toLowerCase();

    // Step 2: Remove spaces and accents
    let name1Clean = removeAccentsAndSpaces(name1Lower);
    let name2Clean = removeAccentsAndSpaces(name2Lower);

    // Step 3: Concatenate the names
    let concatenatedString = name1Clean + name2Clean;

    // Step 4: Calculate the compatibility score
    let compatibilityScore = calculateScore(concatenatedString);

    // Step 5: Repeat steps 1 to 4 to obtain two scores
    let scoreName1 = calculateScore(name1Clean);
    let scoreName2 = calculateScore(name2Clean);

    // Step 6: Normalize the scores
    let normalizedScoreName1 = scoreName1 / name1Clean.length;
    let normalizedScoreName2 = scoreName2 / name2Clean.length;

    // Step 7: Calculate the compatibility based on additional criteria
    let additionalCriteriaScore = 0;
    if (name1.length === name2.length) {
        additionalCriteriaScore += 20;
    }
    if (startsWithVowel(name1) && startsWithVowel(name2)) {
        additionalCriteriaScore += 10;
    }
    if (startsWithConsonant(name1) && startsWithConsonant(name2)) {
        additionalCriteriaScore += 10;
    }
    if (countVowels(name1) === countVowels(name2)) {
        additionalCriteriaScore += 12;
    }
    if (countConsonants(name1) === countConsonants(name2)) {
        additionalCriteriaScore += 12;
    }
    if (containsSpecificLetters(name1) || containsSpecificLetters(name2)) {
        additionalCriteriaScore += 7;
    }

    // Step 8: Calculate the final compatibility
    let finalCompatibility = (normalizedScoreName1 + normalizedScoreName2 + additionalCriteriaScore) / 3;

    return finalCompatibility;
}

function removeAccentsAndSpaces(name) {
    // Implementation to remove accents and spaces
    // Returns a string without accents or spaces
    return name.normalize("NFD").replace(/[\u0300-\u036f\s]/g, "");
}

function calculateScore(string) {
    let score = 0;
    for (let i = 0; i < string.length; i++) {
        score += string.charCodeAt(i);
    }
    return score;
}

function startsWithVowel(name) {
    // Check if the name starts with a vowel
    return /^[aeiou]/i.test(name);
}

function startsWithConsonant(name) {
    // Check if the name starts with a consonant
    return /^[^aeiou]/i.test(name);
}

function countVowels(name) {
    // Count the number of vowels in the name
    return (name.match(/[aeiou]/gi) || []).length;
}

function countConsonants(name) {
    // Count the number of consonants in the name
    return (name.match(/[^aeiou]/gi) || []).length;
}

function containsSpecificLetters(name) {
    // Check if the name contains at least one of the specific letters: l, o, v, e
    return /[love]/i.test(name);
}
