# Try It yourself - error handling
In this exercise we will practice:
- Using the tapResponse operator to handle errors

>NOTE The package `@ngrx/operators` is already installed in this project

## Setup
1. In App Store:
   1. Inject the `NotificationsService` in the `withProps` feature
   2. Replace the pair [`map`, `switchAll`] with `switchMap`

## In the inner observable, add `pipe` and the `tapResponse` operator
1. Implement the `next` method by patching the state with the next dictionary
2. Implement the `error` method so that it calls the notification service
3. Implement the `finalize` method so that it sets the busy flag to false

>NOTE Make sure you chain the `tapResponse` operator to the **Inner observable**, not the outer one.






