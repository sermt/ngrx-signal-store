# Try It yourself - side effects in rxMethods
In this exercise we will practice:
1. Defining rxMethods
2. Calling these methods and passing single values
3. Adding `rxjs` operators
4. Causing side effects using the `tap` operator

## Setup
1. In App Store, redefine the `_invalidateDictionary` method, so that it is implemented using `rxMethod`
   1. Set the type parameter to string
   2. Add a minimal parameter function, that takes a `trigger$` and returns it
2. Fix calls to this function, made in `changeLanguage` and `_resetLanguages`
   1. Since it does not return a Promise, remove the `await` keyword
   2. Pass the currently selected language as parameter


## Using `rxjs` operators
1. Add the first `tap` operator
   1. Call `patchState` to set the busy indicator to `true`
   2. Write something to the console
2. Add a delay using the `delay` operator
3. Add the second `tap` operator after the delay
   1. Call `pathState` to set the busy indicator to false
   2. Write something to the console