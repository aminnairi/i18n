# contributing

## Requirement

- Docker
- Docker Compose

## Dependencies installation

*Install the dependencies for the next commands.*

```console
$ docker-compose run --rm yarn
```

## Lint

*Check that the code style is consistent.*

```console
$ docker-compose run --rm yarn lint
```

## Test

*Check that the specifications are met.*

```console
$ docker-compose run --rm yarn test
```

## Build

*Compile the library for different platforms.*

```console
$ docker-compose run --rm yarn build
```
