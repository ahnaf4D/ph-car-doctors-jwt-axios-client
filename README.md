# What I Learned in This Project

## CRUD Operations Recap

- Reviewed CRUD operations.
- Created different collections in the database for different types of data.

## Authentication and Authorization Recap

- Utilized private routes, Firebase Auth, and AuthContext for secure authentication.

## Data Loading Optimization

- Implemented the GET method to load only necessary data using projections.
  ```javascript
  const options = {
    projection: { service_id: 1, title: 1, price: 1, img: 1 },
  };
  ```

## Retrieving Account-Specific Data

- Loaded account-specific data or specific user data using query parameters.

```javascript
app.get('/api/bookings/', async (req, res) => {
  console.log(req.query.email);
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const cursor = bookingsCollection.find(query);
  const result = await cursor.toArray();
  res.send(result);
});
```

## Handling POST Requests

- Utilized the POST method to insert data into different collections in the database.

```javascript
app.post('/api/bookings/', async (req, res) => {
  const doc = req.body;
  //   delete doc._id;
  console.log(doc);
  const result = await bookingsCollection.insertOne(doc);
  res.send(result);
});
```

## Updating Data with PATCH Method

- Implemented the PATCH method to detect user-confirmed orders and update the status accordingly.

```javascript
app.patch('/api/bookings/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) };
  const updatedBooking = req.body;
  const updatedDoc = {
    $set: {
      status: updatedBooking.status,
    },
  };
  console.log(updatedBooking);
  const result = await bookingsCollection.updateOne(filter, updatedDoc);
  res.send(result);
});
```

## Real-Time Updates on Client Side

- Provided links to code snippets for implementing real-time updates of user orders on the client side.

  - [Code 01](https://github.dev/ahnaf4D/ph-car-doctor-client-homePage/tree/main/src/Pages/BookingDetails)
  - [Code 02](https://github.dev/ahnaf4D/ph-car-doctor-client-homePage/tree/main/src/Pages/BookingDetails)
