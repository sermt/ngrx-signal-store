# Try it yourself - Adding hooks
In this exercise we will repeat what I did in the **Colors Quiz** project, add `onInit` hook and save to local storage

Please repeat the following steps: 

## Repeat the steps:
1. Add an `withHooks` feature to the store
2. Add the `onInit` hook
3. Implement an effect that saves the state to the local storage whenever it changes
    - Remember to use the `getState` method to get the state of the entire store
4. When the store is created, only once, Implement logic to check if the local storage contains any previously stored value
5. If there is a value, deserialize it and use `patchState` to set it as current state.
