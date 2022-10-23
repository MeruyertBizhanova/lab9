// Exercise 3:
function findCircleArea(r) {
    let PI = 3.14;
    let area = PI * r * r;
    console.log("Radius is: " + r + "\nArea is: " + area)
    return area;
}

// Exercise 11:
function evenOrOdd(n) {
    if (n % 2 == 0) {
        console.log(n + " is an Even number")
        return 0;
    } else if (n % 2 == 1) {
        console.log(n + " is an Odd number")
        return 1;
    } else {
        console.log(n + " is not a whole number");
        return -1;
    }
}

// Exercise 13:
function greatestAmongTwo(a, b) {
    console.log("The numbers are: ", a, b)
    if (a >= b) {
        console.log("The greatest is: " + a)
        return a;
    } else {
        console.log("The greatest is: " + b)
        return b;
    }
}

// Exercise 14:
function greatestAmongThree(a, b, c) {
    console.log("The numbers are: ", a, b, c)
    if (a >= b) {
        if (a >= c) {
            console.log("The greatest is: " + a)
            return a;
        } else {
            console.log("The greatest is: " + c)
            return c;
        }
    } else {
        if (b >= c) {
            console.log("The greatest is: " + b)
            return b;
        } else {
            console.log("The greatest is: " + c)
            return c;
        }
    }
}

findCircleArea(5);
findCircleArea(5.6);

evenOrOdd(4);
evenOrOdd(9);
evenOrOdd(4.2);

greatestAmongTwo(2,3);
greatestAmongTwo(0, -4.3);

greatestAmongThree(1,2,3);
greatestAmongThree(4,3,99);
greatestAmongThree(1, 3.4, 2.7);
greatestAmongThree(-1, -10, -5)
