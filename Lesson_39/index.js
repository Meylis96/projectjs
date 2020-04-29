let json = '{"id":2}';

try{
    let user = JSON.parse(json);
    console.log(user);
    if(!user.name){
        throw new Error("This data has no name");
    }
    // console.log("Normal");
    // console.log(a);
    // console.log("Result");
}
catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`We got error: ${error.name}`);
} finally {
    console.log("I will be done always")
}

console.log("I will work");