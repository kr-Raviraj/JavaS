// a=prompt("Enter value of a")
// console.log(a)

// let a=10;
// const b="This is the arrow function with newer syntax"

let name="Singh"


const fname=()=>"Raviraj"
fname()


const sname=(name)=>("Myname s name is "+name)
console.log(sname())


const fullname= (fname,sname)=>{
    let fulln="My Full name is "+fname+" "+sname
    return fulln
}

console.log(fullname())
