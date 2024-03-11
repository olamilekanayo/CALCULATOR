let show = document.getElementById("out")


 //function show(e){
   // console.log(e.target.value);
    //show.innerHTML += e.target.value;
 //}
   function calculate(e) {
    console.log(e.target.value);
    show.innerHTML += e.target.value;
   }

    function any(event) {
    console.log(event.target.value);
    show. innerHTML += event.target.value
   }

    function equal() {
    let value = show.innerhtml;
    console.log(value);

    if (show.innerHTML.includes("+")) {
        let numbers = show.innerHTML.split("+")
        show.innerHTML = Number(numbers[0]) + Number(numbers[1])
    }

    else if (show.innerHTML.includes("-")) {
        let numbers = show.innerHTML.split("-")
        show.innerHTML = Number(numbers[0]) - Number(numbers[1])
    }
    else if (show.innerHTML.includes("*")) {
        let numbers = show.innerHTML.split("*")
        show.innerHTML = Number(numbers[0]) * Number(numbers[1])
    }
    else if(show.innerHTML.includes("^")){
        let numbers = show.innerHTML.split("^")
        show.innerHTML = Number(numbers[0]) ** Number(numbers[1])
    }

    else {
        let numbers = show.innerHTML.split("÷")
        show.innerHTML = Number(numbers[0]) / Number(numbers[1])
    }
}

function cls() {
    let text = show.innerHTML
    console.log(text);
    show.innerHTML = text.slice( 0, show.innerHTML.length -1)
}

function clsAll() {
    let text = show.innerHTML
    console.log(text);
    show.innerHTML = text.slice( 0, show.innerHTML.length - show.innerHTML.length)
}