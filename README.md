This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 🚀 ED-Website Setup

[🔗 _Spanish_](README.es.md)

## 📌 Introduction

This project is containerized using **Docker** to simplify the setup process across different development environments. Using Docker ensures that all developers work with the same dependencies, libraries, and configurations, avoiding the classic "it works on my machine" problem.

## 🎯 Why Docker?

Using Docker brings several benefits:

- ✅ **Consistency**: Runs the same way on any machine, regardless of OS.
- ✅ **No Dependency Conflicts**: Isolates dependencies, avoiding version mismatches.
- ✅ **Quick Setup**: Developers can start working with just a few commands.
- ✅ **Easy Deployment**: The same containerized environment can be used in production.

## 🛠️ Requirements

Make sure you have the following installed:

- [Docker](https://www.docker.com/)
- [Make](https://www.gnu.org/software/make/)

## 🚀 Getting Started

To initialize the project for the first time, follow these steps:

1️⃣ **Build and start the development environment:**

```sh
make build-dev
make start-dev
```

2️⃣ **Check that everything is running:**
Open `http://localhost:3000` in your browser.

---

## 📂 Project Structure

```
/project-root
│── docker/                     # Docker configuration files
│   ├── docker-compose.yml      # Base Docker Compose file
│   ├── docker-compose.dev.yml  # Development-specific overrides
│   ├── docker-compose.prod.yml # Production-specific overrides
│── Makefile                    # Makefile for easy command execution
│── src/                        # Project source code
│── README.md                   # Documentation (this file)
```

## ⚙️ Available Commands

The project uses a **Makefile** to simplify Docker commands. Below are the available commands:

### 🛠️ Development Environment

| Command          | Description                                                    |
| ---------------- | -------------------------------------------------------------- |
| `make build-dev` | Builds the development container                               |
| `make start-dev` | Starts the development environment                             |
| `make stop-dev`  | Stops the development environment                              |
| `make clean-dev` | Stops and removes containers, volumes, and orphaned containers |

💡 **Note:** The development setup allows live code updates without rebuilding the container.

### 🚀 Production Environment

| Command           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| `make build-prod` | Builds the production container                         |
| `make start-prod` | Starts the production container in detached mode        |
| `make stop-prod`  | Stops the production container                          |
| `make clean-prod` | Stops and removes all production containers and volumes |

## 📌 How to Use

1️⃣ **Run the development environment:**

```sh
make build-dev
make start-dev
```

This will start the development environment with hot reloading.

2️⃣ **Run the production environment:**

```sh
make build-prod
make start-prod
```

This starts the production environment in the background.

3️⃣ **Stop and clean up:**

```sh
make clean-dev  # For development
make clean-prod # For production
```

This removes containers and associated volumes.

## 🏗️ Additional Information

- The `docker-compose.dev.yml` is optimized for local development with volume mounts for real-time updates.
- The `docker-compose.prod.yml` builds a leaner, optimized image for production.
- All necessary configurations are inside the `docker/` folder for better organization.

## 📝 Conclusion

By using Docker and Makefile, setting up the project is **simple, fast, and consistent** across different machines. Whether you’re developing locally or deploying to production, these commands help streamline the process.

Happy coding! 🚀
