# Try It yourself - custom feature with input requirements: `withService`
In this exercise we will practice:
- Creating custom features that require content from the input store

>NOTE that we are already using the `withDevtools` feature, so if you have the **redux devtools** extension installed on your browser, you can use it to inspect the current state of the stores.


## Create the custom feature skeleton
- Create the `with-service.feature.ts` file
- Define the type `Update<S extends object>` according to what the `patchState` method receives
- Define the signature of the feature
  

## Specify the input requirements
- Use the first parameter inside teh `signalStoreFeature` to describe the requirements from the inout store
- Implement the feature functionality using the `withMethods` feature

## Add a feature declaration
- Add the feature declaration
  - Add the input requirements
  - Add the output content

## Use it in the quiz store
- Remove the `withProps` feature - you don't need it anymore
- Instead, use `withService` and supply the needed API and updater
- Change the implementation of `generateQuiz` so that it uses the new `_load` method


