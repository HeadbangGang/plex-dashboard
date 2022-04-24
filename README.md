
# Plex Dashboard

Dockerized web-app to display the current status of all of the services running on my home media center.

## Setup
    1. Clone Repository
    2. If you have credentials to the included endpoints that require authentication via the Authencation header
        - update the credentials.js file located on the top level of the repo.

## Deployment

To build the docker container, make sure that docker is installed and running and run:

```bash
  npm run build:docker
```

This will create a docker container ```plex-dashboard:prod``` that will be ready to run.
## License

[MIT](https://choosealicense.com/licenses/mit/)

