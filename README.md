What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: 
    getElementById => get element using the id of the specific element. 
    getElementByIClassName => get element using the Class Name of the specific element
    querySelector => returns the first element that matches a sspecific css selector
    querySelectorAll => returns All elements that matches a sspecific css selector
    
How do you create and insert a new element into the DOM?
Ans:
    1. get parentNode
    2. get childNode
    3. Create Element
    4. Append the element In Pasrent Node
    
What is Event Bubbling and how does it work?
Ans: Event Bubbling is a DOM mechanism , If an event is triggered; it goes to upper Node by using DOM Tree .
     If a child node triggered (ex: li) its parentNode (ex: ul) will trigger too.
     
What is Event Delegation in JavaScript? Why is it useful?
Ans: attaching a single event listener to a parent element instead of adding listeners to multiple similar child elements.
      it is useful:
      as it reduces the number of event listeners.
      and improves performance and memory usage.

What is the difference between preventDefault() and stopPropagation() methods?
Ans: event.preventDefault()  => stops the browser's built-in default action
     event.stopPropagation() => stops the event from moving up or down in DOM tree 
