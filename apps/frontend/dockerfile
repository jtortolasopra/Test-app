# Usar Node.js como base
FROM node:18

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar solo package.json y package-lock.json primero para optimizar la caché
COPY package.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto (ajusta si usas otro)
EXPOSE 10000

# Comando para ejecutar en desarrollo
CMD ["npm", "run", "docker"]
