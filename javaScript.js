alert("Hello");
alert("how are you?");
alert("What's your bday");

console.log("Hidden message");
console.log(100);
console.log('Standard');
console.log(new Date());

document.writeln("Hello from JavaScript <br/>");
document.writeln(new Date());

document.writeln("<h2> This is H2 </h2>");
document.writeln("<h3 style='color:	#ff084a;'>This is H3</h3>");

function paint(){
    document.getElementById("dynamicSection");

    var section = document.getElementById("dynamicSection");

    section.className = "highlight";
}