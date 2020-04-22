## Mention two parts of Express that you learned about this week.

> Answer:  An important feature of express is middleware, which is essentially an array of functions. Another feature of express is routing, which is a way to select which handler function is executed. Routing also provides a way to break down express applications into sub-applications.

## Describe Middleware?

> Middleware be considered an array of functions that get executed in the order they are introduced into the server code.

## Describe a Resource?

> A resource is an object with a type, associated data, relationships to other resources, and set of methods that opperate on it.

## What can the API return to help clients know if a request was successful?

> APIs return a 200 OK server status code to indicate that the request was successful.

## How can we partition our application into sub-applications?

> An express application can be partitioned into sub-applications by importing express sub-routers into the main router with the .use() function.