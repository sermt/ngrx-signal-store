# Try It yourself - custom feature with added content: `withBusy`
In this exercise we will practice:
- Creating custom features that have state

>NOTE that we are already using the `withDevtools` feature, so if you have the **redux devtools** extension installed on your browser, you can use it to inspect the current state of the stores.


## Create the custom feature
- Create a folder for the new custom feature: `with-busy`
- Create 3 files: `slice`, `updaters`, and `feature`
- Define a slice interface, and an initial value
- Define updaters for this slice: `setBusy`, `setIdle`, `toggleBusy`
- Implement the feature
  - Use `withState` to add the new slice
  - Use `withComputed` to add the new computed signal: `isIdle`

## Use the custom feature
In both, `QuizStore` and `AppStore`
- Remove the isBusy property from the slice and initial value
- Remove the busy updaters
- Add `withBusy` to the store at the correct position
- find all places that use the original updaters and instead use the new feature updaters


