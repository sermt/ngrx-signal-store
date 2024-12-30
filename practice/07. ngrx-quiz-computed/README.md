# Try It yourself - Injecting Into Computed Signals
## Prepair the computed signals in the app store
* Create helper function to get dictionary by language
* Inject dictionaries into `withComputed` in the app store
* Use dictionaries in computed signal

## Inject computed signal into Quiz Store
* Inject the app store into the `withComputed` feature of quiz store
* Hold reference to the current dictionary signal (AND DO NOT EVALUATE IT YET)

## Derive computed signals from inject signal
* Add the translation helper functions to help you with computations
* Define and implement the 3 required computed (translated) signals

## Use it in the template of `QuestionPresenter`
* Use the translated title
* Use the translated caption colors
* Use the translated answers