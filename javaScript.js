
console.log("Hidden message");
console.log(100);
console.log('Standard');
console.log(new Date());

document.writeln("Hello from JavaScript <br/>");
document.writeln(new Date());
document.writeln("<h2> This is H2 </h2>");
document.writeln("<h3 style='color:	#ff084a;'>This is H3</h3>");

function paint(){
    var section = document.getElementById("dynamicSection");

    section.className = "highlight";

    var color = document.getElementById("colorValue");

    section.style.backgroundColor = color.value;

    //alert color value
    console.log(color.value);

    var text = document.createElement("p");

    text.innerHTML = "You selected..."+ color.value;
    section.appendChild(text);
    //section.innertext = "You selected:" + color.value;

    
}

function sayHello(){
    alert("Hello");
    alert("how are you?");
    alert("What's your bday");

    //ask the name
    //say: HELLO, <NAME>
    // show it (append)
}
function WyN(){
    var input = prompt("What's your Name");
    console.log(input);
    var text = document.createElement("h3");
    text.innerText = "Hello,   " + input;
    let section = document.getElementById("practice");            
    section.appendChild(text);
   }
