# TypeScript CSV

## TIL

### Enums

-   Define a set of named constants
-   Numeric and string-based

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
