# Understanding This Object

Imagine a little card for a person. The card stores a name, and it also has a
button that knows how to say that name.

```js
const user = {
    name: "Akil",
    printName() {
        return this.name;
    }
}
console.log(user.printName());
```

## What is inside `user`?

`user` is like the card:

```text
user
├── name: "Akil"
└── printName: a function (a little instruction)
```

- `name` stores the text `"Akil"`.
- `printName()` is an instruction. It can return the user's name.
- Inside that instruction, `this.name` means “the `name` on this user.”

The last line calls the `printName` instruction and gives its result to
`console.log`:

```js
console.log(user.printName());
```

Because the method is called as `user.printName()`, JavaScript connects `this`
to `user`. So `this.name` finds `"Akil"`, the method returns `"Akil"`, and
`console.log` prints it:

```text
Akil
```

**In short:** `user` is the card, `printName` is its instruction, and
`console.log(user.printName())` runs the instruction and displays `"Akil"`.
