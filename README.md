## Prerequisites

## Clone the submodule 
There's a submodule and in order to use the deploy.sh script to 
publish a new version you need it.

    cd public
    git submodule update --init --recursive

### Hugo Extended

Hugo is not a nodejs (javascript) package it needs to be installed (to the commandline). It is written in GO, but Hugo developers maintain binaries for all platforms so it's easy to install. https://gohugo.io/

For windows install : https://chocolatey.org/packages/hugo-extended

## Run dev mode

```
hugo server -D
```

ou avec Docker, sans installer Hugo :

```
./startDockerHugo.sh
```

## Prod mode

```
hugo
```

## Deploy
Don't forget to clone the submodule beforehand, see top of Readme 

```
hugo
./deploy.sh
```
