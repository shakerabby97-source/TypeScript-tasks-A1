# How does TypeScript's type hierarchy work with any, unknown, and never? Why is unknown always preferred over any?


=> The Top of the Hierarchy (any and unknown): These are the "super-types." Every other type in TypeScript can be assigned to any or unknown because they can represent any value in JavaScript.

The Bottom of the Hierarchy (never): This is the "sub-type." It sits at the very bottom, meaning never can be assigned to any other type, but no type can be assigned to never (except never itself)