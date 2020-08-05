# React.js Test Task: Library

Write a library of books and magazines using React.

## Topic

You have to implement an abstracted and simple library system.

## Frame conditions

1. This is a real world situation. You are allowed to consult the Internet, use every library you want, call a friend ...

   **BUT:** You are not allowed to do [pair programming](https://en.wikipedia.org/wiki/Pair_programming).

2. Develop your code based on React.js version 16, Redux version 4 and NEXT.js version 9.

   You do not need to use Semantic-UI, the layout, tests or routing provided.
   You can rename, refactor, remove or delete them as you wish.
   They were created to provide a minimum structure so you can focus on what you think it is important to finish the tasks requested.

3. Keep the following priorities in mind while you implementing - in the mentioned order:
   1. Code quality
   2. Usage of object oriented methods
   3. Functionality

4. Given resources:

   > **Hint:** There is a reason why there are so many books and authors in german with [umlauts](https://en.wikipedia.org/wiki/Germanic_umlaut).

   * [`authors.csv`](data/authors.csv): Contains authors with its `email`, `firstName` and `lastName`.
   * [`books.csv`](data/books.csv): Contains books with its `title`, `description`, one or more `authors` and an `isbn`.
   * [`magazines.csv`](data/magazines.csv): Contains magazines with its `title`, one or more `authors`, a `publishedAt` and an `isbn`.

## Tasks

* [Main tasks](#main-tasks)
* [Optional tasks](#optional-tasks)

### Main tasks

1. Your software should read all data from the given CSV files in a meaningful structure.

2. Print out all books and magazines with all their details (with a meaningful output format).

   > **Hint**: Do not call `printBooks(...)` first and then `printMagazines(...)` ;-)

3. Find a book or magazine by its `isbn`.

4. Find all books and magazines by their `authors`’ email.

5. Print out all books and magazines with all their details sorted by `title`.
   This sort should be done for books and magazines together.

### Optional tasks

> **Hint:** Optional means optional.

1. Write Unit tests for one or more methods.

2. Implement a view for direct path access for each ISBN and link then to the search results.

3. Add a book and a magazine to the data structure of your software and export it to a new CSV files.

## Procedure

1. Clone the repo.

2. Open in your favorite IDE.

3. Prepare a solution.

4. Let Commercial People know when you are done with your solution.

## FAQ

##### How to install the application?

```bash
yarn install
```

##### How to run your application?

```bash
yarn start
```

##### How to run your tests?

```bash
yarn lint
yarn test
```

## License

See [LICENSE](LICENSE) file.