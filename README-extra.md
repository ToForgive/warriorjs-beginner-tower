# Documentation Notes
Some senses return an array of things. Use Array prototype methods of JS to process them. [LINK](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Methods)

## Mutator
Modify the array

| Method          | Description
| ---             | ---
| copyWithin      | Copies sequence of array elements within the array
| fill            | Fills array from start index to end index with static value
| pop             | Removes last element from array and returns that element
| push            | Adds one or more elements to the end of the array and returns new length of the array
| reverse         | Reverses the order of elements of an array in place
| shift           | Removes the first element of the array and returns that element
| sort            | Sort elements of an array and returns that array
| splice          | Adds and/or removes elements of the array
| unshift         | Adds one or more elements to the front of an array and returns the new leght of the array

## Accessor
Does not modify the array and returns representations of the array

| Method          | Description
| ---             | ---
| concat          | Returns new array comprised of this array joined with other array(s) or value(s)
| includes        | Determines if an array contains a certain element and returns T/F
| indexOf         | Returns the first (least) index of an element equal to the specified value or -1 if not found
| join            | Joins all array elements into a string
| lastIndexOf     | Returns the last (greatest) index of an element equal to the specified value or -1 if not found
| slice           | Extracts a section of the array and returns a new array
| toSource        | Returns an array literal representing the spcified array, can be used for a new array
| toString        | Returns a string representation of the array and its elements
| toLocaleString  | Returns a localised string representation of the array and its elements

## Iteration
Takes arguments to be called back while processing the array
To mutate, copy it to a new array instead

| Method          | Description
| ---             | ---
| entries         | Returns new Array Iterator object that contains key/value pairs for each index in the array
| every           | Returns true if every element in this array satisfies the provided testing function
| filter          | Creates a new array with all the elements of this array for which the provided testing function returns true
| find            | Returns found value in the array, if the element satisfies the provided testing function or undefined if not found
| findIndex       | Returns the found index in the array, if an element of the array satisfies the provided testing function and -1 if not found
| forEach         | Calls a function for each element of the array
| keys            | Returns a new Array Iterator tha contains the keys for each index in the array
| map             | Creates a new array with the results of calling a provided function on every element in this array
| reduce          | Applies a function against an accumulator and each value of the array (from left-to-right) as to reduce to a single value
| reduceRight     | Applies a function against an accumulator and each value of the array (from right-to-left) as to reduce to a single value
| some            | Returns true if at least one element in the array satisfies the provided testing function
| values          | Returns a new Array Iterator object that contains the values for each index in the array
| [@@iterator]    | Returns a new Array Iterator object that contains the values for each index in the array

# WarrriorJS

## Abilitie Types

* Action
* Senses

### Actions

Affects the game, interacts with the environment.
**Only one action can be performed per turn.**

### Senses

Do not affect gameplay, but gathers information about the floor.
Can be performed as many times as needed to gather information and choose actions.

**Information can be recorded for usage in the next turn.**

## Effects

Status afflictions.

## Spaces

Object representing a square in the floor.
One or more spaces (in an array) is returned with sensing.

## Warrior API

Most actions can receive directional arguments

* forward
* backward
* left
* right

## Space API

| Method                      | Description |
| ---                         | --- |
| space.isEmpty()             | Determines if nothing (except stairs) is here
| space.isWall()              | Determines if is edge of level
| space.isStairs()            | Determines if stairs are here
| space.isCaptive()           | Determines if captive unit is here
| space.isEnemy()             | Determines if enemy unit is here
| space.isWarrior()           | Determines if warrior is here
| space.isBound()             | Determines if unit here is bound
| space.isUnderEffect(effect) | Determines if unit here is under a given effect

## Tips

* Review README.
* Rest when there are no enemies
* Use senses liberally
* Sweep the area for points




