# What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

=> There are some difference between type aliases and interface like type alias is more used for unions , tuples and literals etc where interface is more of object oriented, So the core difference is I think type aliases is more for handling or should handle primitives types where interface goes well for non primitives types like array or object. So we should choose interface when defining the shape of objects or classes and we should choose type when working with primitives , union types etc.


# type alas example
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

type User = {
    id: ID;
    currentStatus: Status;
};



# interface example
interface Animal {
    name: string;
    age: number;
}

const cat: Animal = {
    name: "Whiskers",
    age: 3
};