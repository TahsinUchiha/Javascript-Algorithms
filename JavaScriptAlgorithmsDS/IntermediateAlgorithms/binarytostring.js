function binaryAgent(str) {
    // charCodeAt --> will give me number value
    // parseInt ---> will convert binary into number
    // String.fromCharCode(num1, num2 ...) --> will convert the number into a character strinhg
    let charArr = []
    str.split(" ").forEach((e) => {
      charArr.push(String.fromCharCode((parseInt(e, 2))));
    })
    str = charArr.join("");
    return str;
}