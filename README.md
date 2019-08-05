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

```TypeScript
const printArr = <T>(arr: T[]): void => {
    for(let i = 0; i< arr.length; i++) {
        console.log(arr[i]);
    }
}
printArr<string>(['a', 'b', 'c']);
```

### Git Revert & Reset

-   Revert and create a new commit

```bash
git revert --no-commit HEAD~3.. # revert to a point before recent three commits
git commit -m "Revert A, B, C"
git push origin master
```

-   Delete prev commits
-   Use with care

```bash
git reset --hard HEAD~ # revert to the last commit
git push -f origin master # force push
```
