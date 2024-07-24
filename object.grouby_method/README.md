The Object.groupBy() method in JavaScript groups elements of an iterable (such as an array) into an object based on a callback function. The callback function determines the group key for each element. The result is an object where each key represents a group, and the value is an array of elements that belong to that group.

Syntax:

Object.groupBy(items, callbackFn)

items: The iterable (e.g., an array) to be grouped.

callbackFn: A function that returns the key for grouping each element.

Returns:An object with properties for each group, where each property contains an array of the grouped elements.
