# How does TypeScript's type hierarchy work with any, unknown, and never? Why is unknown always preferred over any?


=> The Top of the Hierarchy (any and unknown): These are the "super-types." Every other type in TypeScript can be assigned to any or unknown because they can represent any value in JavaScript.

The Bottom of the Hierarchy (never): This is the "sub-type." It sits at the very bottom, meaning never can be assigned to any other type, but no type can be assigned to never (except never itself)


the reason behind always preferring unknown over any is type safety because any turns of the types checking for that value which contradicts the very reason we are using typescript, 

On the other hand , unknown let you assign the value when you get to know the value for instance if you don't know the value while before hand like a api response or anything else you can initial the type using unknown by that your telling typescript that you don't know the value yet but when the value arrive notify me to assign the correct value.