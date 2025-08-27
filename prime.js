let num = "blue";
let n;

function prime() {
    if(typeof(num) == "string") {
        console.log("not a number");
        return
    } else {
        if(num < 2 ) {console.log(false)};
    if(num === 2) {console.log(true)};

    for (let i=2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            console.log(false);
            return;
        }
    }
    console.log(true);
    }
}

prime();