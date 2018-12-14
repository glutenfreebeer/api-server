# Gluten-free beers API Server

## Start

```sh
docker-compose up
```

## Api

Get all beers

    GET http://localhost:3000/api/beers/

Search a beer

    GET http://localhost:3000/api/beers/?q=green

Beer details

    GET http://localhost:3000/api/beers/{bid}/
