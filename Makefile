.PHONY: dev prod restart-dev build-prod start-dev start-prod stop-dev stop-prod clean-dev clean-prod

# Define variables globally
DOCKER_COMPOSE_COMMAND = docker compose -f docker/docker-compose

# Development environment
restart-dev:
	-rm -rf node_modules
	npm install
	$(DOCKER_COMPOSE_COMMAND).dev.yml up

start-dev:
	@if [ ! -d './node_modules' ]; then \
		npm install; \
	fi
	$(DOCKER_COMPOSE_COMMAND).dev.yml up

stop-dev:
	$(DOCKER_COMPOSE_COMMAND).dev.yml down

clean-dev:
	-rm -rf node_modules
	$(DOCKER_COMPOSE_COMMAND).dev.yml down -v --remove-orphans

# Production environment
build-prod:
	$(DOCKER_COMPOSE_COMMAND).prod.yml build

start-prod:
	$(DOCKER_COMPOSE_COMMAND).prod.yml up -d

stop-prod:
	$(DOCKER_COMPOSE_COMMAND).prod.yml down

clean-prod:
	$(DOCKER_COMPOSE_COMMAND).prod.yml down -v --remove-orphans
