# Try It yourself - async APIs in rxMethods
In this exercise we will practice:
1. Invoking async APIs
2. Using Flattening `rxjs` operators

## Map and Flatten
1. In App Store, find the `_invalidateDictionary` method
   1. Remove the `delay` operator
   2. Replace it with a proper `map` operator that returns a dictionary per the requested langauge
   3. You have just created a **Higher Order Observable**
2. Flatten the higher order observable
   1. Use the `switchAll` operator to flatten the observable
   2. Now modify the second `tap` operator so that it also sets the current dictionary

## Continue to code along with me
- Once you have reached this point, continue the video and code along with me
- We will create another `rxMethod` to support generating a new quiz
- Question: Which flattening operator will best suit this scenario?




