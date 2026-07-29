# Short Response Questions

Answer each question completely but concisely. Use proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or MDN, but do NOT copy and paste definitions verbatim — write answers in your own words.

You can earn up to **6 points per question** (3 points for technical content, 3 points for writing quality).

Before submitting, use a spell checker to ensure your responses are free of grammar and spelling errors.

---

### Question 1: Scope

The following code throws a `ReferenceError` at runtime. Explain **why** this error occurs. Your answer must use the word **scope**.

```js
const calculateFinalPrice = (price, hasCoupon) => {
  const taxMultiplier = 1.1;
  if (hasCoupon) {
    let finalPrice = (price - 5) * taxMultiplier;  
  } else {
    let finalPrice = price * taxMultiplier;
  }
  return finalPrice;
}

calculateFinalPrice(50, true);
```

**Your Answer:**
The error happens because of scope. The variable finalPrice is declared with let inside the if and else blocks, so it only exists inside those blocks. When the function tries to return finalPrice, it is outside of its scope, so JavaScript throws a ReferenceError

```js
const calculateFinalPrice = (price, hasCoupon) => {
  const taxMultiplier = 1.1;
  let finalPrice;
  if (hasCoupon) {
     finalPrice = (price - 5) * taxMultiplier;  
  } else {
     finalPrice = price * taxMultiplier;
  }
  return finalPrice;
}

calculateFinalPrice(50, true);
```



### Question 2: Encapsulation and Private Fields

Explain what **encapsulation** means in object-oriented programming. What does the `#` syntax do in a JavaScript class, and why is it useful?

**Your Answer:**

Encapsulation means keeping an object's data and methods together while protecting its internal data from being accessed or changed directly. The # syntax creates a private field, which can only be accessed inside the class. This is useful because it protects the data and helps prevent accidental changes from outside the class.

### Question 3: Flexbox vs. CSS Grid

Explain the difference between **Flexbox** and **CSS Grid** and provide an example of a component of a website that would use each.

**Your Answer:**

Flexbox is used for arranging items in one direction either a row or a column, while CSS Grid is used for creating two-dimensional layouts with rows and columns. For example, Flexbox is good for a navigation bar, and CSS Grid is good for a webpage layout with a header, sidebar, main content, and footer.

---

### Question 4: Async Execution Order

In what order will the numbers be logged when this code runs? List them and explain why they appear in that order.

```js
console.log('1');

const loadRecipe = async (id) => {
  console.log('2');
  const response = await fetch(`https://dummyjson.com/recipes/${id}`);
  const data = await response.json();
  console.log('3');
  return data;
};

loadRecipe(1);
console.log('4');
```

**Your Answer:**
The numbers will be logged in this order: 1, 2, 4, 3.
1 is printed first because it is the first line of code. Then loadRecipe(1) runs and prints 2. When the code gets to await fetch(), it waits for the data to come back. While it is waiting, the program keeps running, so 4 is printed next. After the data is received, the function continues and prints 3 last.

---
