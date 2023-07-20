
## Como utilizarlo

### 1. Se generan claves publicas y privadas

```bash
npx web-push generate-vapid-keys
```

### 2. Crear el archivo .env

Crear las siguientes constantes y completarlas con los valores generados en el punto 1

```
PUBLIC_VAPID_KEY=
PRIVATE_VAPID_KEY=
```
### 3. Correr

```
node src/index.js
```


### 4. Rutas

#### Subscripción

metodo: POST
URI: http://localhost:3000/subscribe

Respuesta:

```json
{
  "ok": true,
  "mensaje": "{\"title\":\"Titulo de la noti\",\"message\":\"Nuevo mensaje mandado desde el servidor\"}"
}
```

#### Enviar mensaje push

metodo: POST
URI: http://localhost:3000/noti

Cuerpo:

```json
{
  "title": "Titulo de la noti",
  "message": "Nuevo mensaje mandado desde el servidor"
}
```