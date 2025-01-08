# Try It yourself - My first custom feature: withLocalStorage
In this exercise we will practice:
- Creating our own custom features

>NOTE that we are already using the `withDevtools` feature, so if you have the **redux devtools** extension installed on your browser, you can use it to inspect the current state of the stores.


## Create the custom feature
- Create a folder for custom features
- Add a file for the local storage feature
- Add a function called `withLocalStrage` which returns a `SignalStoreFeature`
- Implement the function using the `signalStoreFeature` function, and use a `withHooks` feature

## Use the custom feature
- Go to the Quiz Store, remove the `withHooks` feature and instead use the feature you have just created