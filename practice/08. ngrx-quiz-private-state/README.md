# Try It yourself - Private and non-signal data
In this exercise we will practice:
1. Using private store members
2. Using `withProps`

>Note The project is already using version 19 of ngrx signals, so you do not need to upgrade

## Private store Members
In this section we will implement the `resetLanguage` functionality as a private method and call it from the `onInit` hook.

1. In app store, Implement the `resetLanguages` updater function
2. Add a method called `_resetLanguages` and implement it using the updater
3. Call the new private method from the `onInit` hook

## `withProps`
1. Add the `withProps` feature
2. Define constants `_dictinaries` and `_languages`. Assign to them and return them properly
3. In the `withComputed` and `withMethod` sections, now use the props instead of injecting the values again
