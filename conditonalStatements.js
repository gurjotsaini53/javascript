let age = prompt("hey What is your age?")

if (age<0)
{
    console.log("Invaild input")
}
else if(age<9)
{
    console.log("You are a child , you can't even think of driving");

}
else if (age<18)
{
    console.log("You can drive after 1 year");
}
else {
    console.log("You can drive");
}