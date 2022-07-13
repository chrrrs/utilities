export type UnpackArray<T> = T extends Array<infer U> ? U : T;

// Get the type of the first element of an array
// usage:
// const myArray = [{text: 'hello'}, {text: 'world'}];
// type MyArrayType = UnpackArray<typeof myArray>; // {text: string}

