function evenOdd(word) {
    let operation1 = input.length % 2;
    if (typeof word !== "string") {
        console.log("Please input string not number")
    }

    else if (operation1 == 0) {
        console.log("even")
    }
    else {
        console.log("odd")
    }
}

let input = "www";
evenOdd(input);