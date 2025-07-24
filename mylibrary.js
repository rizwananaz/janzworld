function showMessage() {
    document.getElementById('display').innerHTML = 'The button was clicked!';
}

  
    var a =5;
    document.write("The value of a is " + a + "<br>");
   
    var b = 10;
    document.write("The value of b is " + b + "<br>");
    var c = a + b;
    document.write("The value of c is " + c + "<br>");

    var myname = "john";
    var myage = 20;
    document.write("My name is " + myname + "<br>");
    document.write("My age is " + myage + "<br>");
  
    




// console.log("This is a simple JavaScript program.");
// 
console.log("Hello world!");

      let p = 10;
      let q = 5;
      console.log("Sum of p and q is:", p + q);

    // Function declaration local and global variables
    // This function demonstrates the use of local and global variables
      var x = 10; // Global variable

    function myFunction() {
        var y = 20; // Local variable
        console.log("The value of x is: " + x + "<br>"); // Accessing global variable
        console.log("The value of y is: " + y + "<br>"); // Accessing local variable
    }

    myFunction(); // Call the function to see the output
    
    var a = 'thomas';
    function delta(b){
        document.write('the name1=' + b + '<br>');

    }

    function epsilon(){
        var c = 'james';
        console.log(c);

    }
    delta(a); // This will print 'thomas'
    epsilon(); // This will print 'james'
    console.log(b);

