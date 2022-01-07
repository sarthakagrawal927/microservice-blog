# Microservice blog

With the help of eventBus and queryService - we are able to fetch all comments & posts ( different services) in a same request.
With this we remove dependencies of services on each other but end up duplicating the data.
Now if some service crashes other services can work standalone.
