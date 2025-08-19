This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# 🚀 Configuración de ED-Website

## 📌 Introducción

Este proyecto está containerizado con **Docker** para simplificar el proceso de configuración en diferentes entornos de desarrollo. Usar Docker garantiza que todos los desarrolladores trabajen con las mismas dependencias, bibliotecas y configuraciones, evitando el clásico problema de "funciona en mi máquina".

## 🎯 ¿Por qué Docker?

El uso de Docker trae varios beneficios:

- ✅ **Consistencia**: Se ejecuta de la misma manera en cualquier máquina, sin importar el sistema operativo.
- ✅ **Sin conflictos de dependencias**: Aísla las dependencias, evitando desajustes en las versiones.
- ✅ **Configuración rápida**: Los desarrolladores pueden comenzar a trabajar con solo unos pocos comandos.
- ✅ **Fácil despliegue**: El mismo entorno containerizado puede utilizarse en producción.

## 🛠️ Requisitos

Asegúrate de tener instalados los siguientes programas:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Make](https://www.gnu.org/software/make/)

## 🚀 Primeros Pasos

Para inicializar el proyecto por primera vez, sigue estos pasos:

1️⃣ **Compila e inicia el entorno de desarrollo:**

```sh
make build-dev
make start-dev
```

2️⃣ **Verifica que todo esté funcionando:**
Abre `http://localhost:3000` en tu navegador.

---

## 📂 Estructura del Proyecto

```
/project-root
│── docker/                     # Archivos de configuración de Docker
│   ├── docker-compose.yml      # Archivo base de Docker Compose
│   ├── docker-compose.dev.yml  # Configuración específica para desarrollo
│   ├── docker-compose.prod.yml # Configuración específica para producción
│── Makefile                    # Makefile para ejecutar comandos fácilmente
│── src/                        # Código fuente del proyecto
│── README.md                   # Documentación (este archivo)
```

## ⚙️ Comandos Disponibles

El proyecto usa un **Makefile** para simplificar los comandos de Docker. A continuación, los comandos disponibles:

### 🛠️ Entorno de Desarrollo

| Comando          | Descripción                                                        |
| ---------------- | ------------------------------------------------------------------ |
| `make build-dev` | Construye el contenedor de desarrollo                              |
| `make start-dev` | Inicia el entorno de desarrollo                                    |
| `make stop-dev`  | Detiene el entorno de desarrollo                                   |
| `make clean-dev` | Detiene y elimina contenedores, volúmenes y contenedores huérfanos |

💡 **Nota:** La configuración de desarrollo permite actualizaciones en vivo del código sin necesidad de reconstruir el contenedor.

### 🚀 Entorno de Producción

| Comando           | Descripción                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `make build-prod` | Construye el contenedor de producción                              |
| `make start-prod` | Inicia el contenedor de producción en segundo plano                |
| `make stop-prod`  | Detiene el contenedor de producción                                |
| `make clean-prod` | Detiene y elimina todos los contenedores y volúmenes de producción |

## 📌 Cómo Usarlo

1️⃣ **Ejecutar el entorno de desarrollo:**

```sh
make build-dev
make start-dev
```

Esto iniciará el entorno de desarrollo con recarga en caliente.

2️⃣ **Ejecutar el entorno de producción:**

```sh
make build-prod
make start-prod
```

Esto inicia el entorno de producción en segundo plano.

3️⃣ **Detener y limpiar:**

```sh
make clean-dev  # Para desarrollo
make clean-prod # Para producción
```

Esto elimina los contenedores y volúmenes asociados.

## 🏗️ Información Adicional

- `docker-compose.dev.yml` está optimizado para desarrollo local con montajes de volúmenes para actualizaciones en tiempo real.
- `docker-compose.prod.yml` construye una imagen más liviana y optimizada para producción.
- Todas las configuraciones necesarias están dentro de la carpeta `docker/` para una mejor organización.

## 📝 Conclusión

Al utilizar Docker y Makefile, la configuración del proyecto es **simple, rápida y consistente** en diferentes máquinas. Ya sea desarrollando localmente o desplegando en producción, estos comandos ayudan a agilizar el proceso.

¡Feliz codificación! 🚀
