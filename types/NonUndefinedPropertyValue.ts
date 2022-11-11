export type NonUndefinedPropertyValue<T> = {
  [P in keyof T]-?: NonUndefinedPropertyValue<NonNullable<T[P]>>;
};

// Credits: https://stackoverflow.com/a/53050575
// Remove `null` or `undefined` object values
//
// Usage:
// type TMyObject = {field: string | null | undefined}
// type TObjectWithoutNullOrUndefined = NonUndefinedPropertyValue<TMyObject>
// // evaluates to {field: string}
