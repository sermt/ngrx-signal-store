# Try It yourself - withEntities
In this exercise we will practice:
- Using custom features
- Using `withEntities` for entity management
- Configuring the entities
- Using the `withEntities` updaters

>NOTE that we are already using the `withDevtools` feature, so if you have the **redux devtools** extension installed on your browser, you can use it to inspect the current state of the store.


## Creating entity configuration
- Create the `bookConfig` constant
  - Use the `entityConfig` creator function to create it
  - In the `entity` property, use the `type<T>` function to define that the entity type is `Book`
  - In the `collection` property, use `_books` as collection name, so that it will defined as a private collection
  - You may **optionally** also define the `selectId` property, and use a lamda expression that extracts `book.id`. Since this is the default anyway, it is not **required**.

## Using the feature
- Add a `withEntities` feature to the store. Place it in the right position
- Fix the implementation of the `book` computed signal so that it finds the book in the collection entity map.
- Add `withHooks` and set all entities when the store is initialized, from the `BOOKS_COLLECTION` constant


## Allow to rename the current book
- Implement a `renameCurrentBook` method, and use the `updateEntity` updater.
- Call the new method when the "rename" button is clicked.


