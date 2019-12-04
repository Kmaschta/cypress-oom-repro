export UID = $(shell id -u)
export GID = $(shell id -g)
export YARN_CACHE_FOLDER=.cache/yarn
export CYPRESS_CACHE_FOLDER=.cache/cypress

install:
	yarn install

test:
	yarn test-ci
