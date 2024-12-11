# Try it yourself - Adding Computed signals
In this exercise we will repeat what I did in the **Colors Quiz** project, and add computed signals.

Please repeat the following steps: 

1. Add a `withComputed` feature.
    - receive the store as parameter 
    - create constants for each computed signal you create
    - finally return an object with key-value pairs of the computed signals
2. Create computed signals for
    - `currentQuestionIndex`
    - `isDone`
    - `currentQuestion`
3. In the `question presenter` component
    - Inject the store
    - The `question` property should point to the correct signal in the store 
