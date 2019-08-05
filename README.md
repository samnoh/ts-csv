# TypeScript CSV

## TIL

### Enums

-   Define a set of named constants
-   Numeric or string-based

```TypeScript
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
} // 1, 2, 3, 4
```

```TypeScript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
```

### Generics

-   Define the type of a property/argument/return value at a future point
-   Used for writing resuable code

```TypeScript
class Test<T> {
    data: T
}

const test1 = new Test<string>();
const test2 = new Test<number>();
test1.data = 'Hello';
test2.data = 123;
```
