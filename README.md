# **REACT HOOKS**

**Hooks are the features in React, which allows you to use React features without having to write a class**<br>
**Hooks don't work inside classes**

## **Why Hooks?**

### **Reason 1**

    limitations in "this" keyword in JavaScript.
    binding of event handlers in class components.
    unreliable Hot Realoads

### **Reason 2**

    no particular way to reuse stateful components.
    HOC & render props patterns address this problems but hard to refactor.
    Need to share statefull logic in a better way.

### **Reason 3**

    components for data fetching and subscribing to events codes is not organized and scattered in different life-cycle methods.

## **Day 1**:

`27/12/22`
<br><br>
<img src="https://media0.giphy.com/media/13VLdHIQRb8zQc/giphy.gif?cid=790b761139649fcbebc663ec138bf6268a255990c913eb92&rid=giphy.gif&ct=g" width="20"><br>
**_useState()_ hooks:**

`const [count, setCount] = useState(0);`

    Only call HOOKS on the TOP level.
    Don't Call HOOks into condition, or nested functions.
    Only call hooks from React Functions (not from JS components)
