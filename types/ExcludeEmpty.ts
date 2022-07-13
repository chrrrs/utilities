type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];
export type ExcludeEmpty<T> = T extends AtLeastOne<T> ? T : never;

// Exclude empty values from type
// usage:
// type MyObject = ExcludeEmpty<{} | {
//   text: string;
//   value: number;
// }>; // {text: string; value: number}
