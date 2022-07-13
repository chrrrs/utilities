export type NonNullable<T> = T extends null | undefined ? never : T;

// Discard nullable values from type
// usage:
// type MyType = NonNullable<string | null | undefined>; // string
