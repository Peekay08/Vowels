function vowels() {
    let word = "PROMISE"
    let lowerWord = word.toLowerCase();
    let vowels = " ";

    for (let char of lowerWord) {
        if("aeiou".includes(char)) {
            if(vowels.includes(char)) {
                vowels = vowels
            } else {
                vowels = vowels + " " + char;
            }
    } 
    }

    if(vowels.includes("a") || vowels.includes("e") || vowels.includes("i") || vowels.includes("o") || vowels.includes("u") ) {
        console.log("The vowels int the word are: " + vowels);
    } else {
        console.log("There are no vowels in the word");
    }
}

vowels();