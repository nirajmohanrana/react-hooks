# **REACT HOOKS**

**Hooks are the features in React, which allows you to use React features without having to write a class**<br>
**Hooks don't work inside classes**

## **Why Hooks?**

### **Reason 1**

- limitations in "this" keyword in JavaScript.
- binding of event handlers in class components.
- unreliable Hot Realoads.

### **Reason 2**

- no particular way to reuse stateful components.
- HOC & render props patterns address this problems but hard to refactor.
- Need to share statefull logic in a better way.

### **Reason 3**

- components for data fetching and subscribing to events codes is not organized and scattered in different life-cycle methods.

---

---

---

## **Day 1**:

`27/12/22`

## **UseState Hook:**

<br><br>
<img src="https://media0.giphy.com/media/13VLdHIQRb8zQc/giphy.gif?cid=790b761139649fcbebc663ec138bf6268a255990c913eb92&rid=giphy.gif&ct=g" alt="1" width="20">
<br>
**_useState()_ hooks:**<br>
`const [count, setCount] = useState(0);`<br>

    Only call HOOKS on the TOP level.
    Don't Call HOOks into condition, or nested functions.
    Only call hooks from React Functions (not from JS components)

- _implemented HookCounter.js_

---

<br><br>
<img src="https://media3.giphy.com/media/pKt7w9ILVOdWw/giphy.gif?cid=ecf05e47aswk6vvvvu7kccxkwfqmiw1pgzp20s6iaii56xhf&rid=giphy.gif&ct=g" alt="2" width="20">
<br>
**_useState()_ hooks with previous state value:**<br>
Passing previous state is unsafe when used in a function so instead pass it through function to a State setter.<br>

**Previously**:<br>
`<button onClick={() => { setCount(count - 1) }} Decrement </button>`<br>
**Now**:<br>
`<button onClick={() => { setCount(prevCount => prevCount + 1) }} Decrement </button>`

- _implemented HookCounterTwo.js_

---

<br><br>
<img src="https://media0.giphy.com/media/d7id4BY2NQnJe/giphy.gif?cid=790b7611b2b74ce0fcd0b69e3535031c98aefae80a8021c0&rid=giphy.gif&ct=g" alt="3" width="20">
<br>
**_useState()_ hooks with Objects:**<br>
useState doesn't merge and update state automatically, it has to be done manually by using **_spread operator_**.

**Previously**:<br>

```
<input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ firstName: e.target.value })}
        />
```

In this it create new object washing out old stored value.

**Now**:<br>

```
<input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({...name, firstName: e.target.value })}
        />
```

In this it copies old stored value and update new values in it.<br>
Called **_Spread Operator_**

- _implemented HookCounterThree.js_

---

<br><br>
<img src="https://media0.giphy.com/media/U7oYLyQqXM9sA/giphy.gif?cid=790b7611aad068ac5a2ce8c480a00e16daad98909dd1a1df&rid=giphy.gif&ct=g" alt="4" width="20">
<br>
**_useState()_ hooks with Arrays:**<br>
we can simply create arrays like object

```
const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
```

- _implemented HookCounterFour.js_

---

### **_Note:_**

- When dealing with objects or arrays, always make sure to 'spread' your state variable and then call the setter function.

---

---

## **UseEffect Hook:**

<br><br>
<img src="https://media0.giphy.com/media/13VLdHIQRb8zQc/giphy.gif?cid=790b761139649fcbebc663ec138bf6268a255990c913eb92&rid=giphy.gif&ct=g" alt="1" width="20">
<br>
