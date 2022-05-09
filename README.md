<h1 align="center">
<img src="https://img001.prntscr.com/file/img001/KE3MGpe3Q06D0p71rFFupw.jpeg" alt="Web Preview" />
</h1>

## Demo
Open Demo API: [Restify-NewCombin](https://restify-newcombin.herokuapp.com/)

```$ GET``` ```/api/members```

```$ POST``` ```/api/members```

```$ POST``` ```/auth```

## API
La pagina debe poder comunicarse con la API de este repositorio. La misma consta de 2 endpoints
* `GET` ```http://localhost:8081/api/members``` - para obtener los miembros
* `POST` ```http://localhost:8081/api/members``` - para añadir un nuevo miembro
* Para poder utilizarlos, el Authorization header debe formatearse como ```Bearer [token]```.

## AUTH
Para poder utilizar los 2 endpoints anteriores debe obtener un token y enviarlo en las llamados.
* `POST` ```http://localhost:8081/auth``` - para obtener el token
body:
  "username": "user"
  "password": "pass"

### Start API server
* Clonar este repositorio
* ```git clone https://github.com/domicoder/restify-restful-api.git```
* Instalar las dependencias
* ```npm install```
* ```npm start```

### Validaciones de la API
* **firstName, lastName y address:** Mas de 1 caracter, sin espacios a los costados (trim).
* **ssn:** Tener el formato ###-##-#### (cada # es un numero, los guiones son obligatorios).
* Si el front no cumple las validaciones debe deshabilitar el boton de enviar.

## JWK
* Crear un archivo ```config.json```
* Agregar lo siguiente
```
{
    "jwt": {
        "secret": "SECRET_KEY_TOKEN_HERE"
    }
}
```

## Environtment variables
* Crear dos archivos: ```.env``` & ```.env.production```
```
RESTIFY_APP_USER=USER
RESTIFY_APP_PASSWORD=PASSWORD
RESTIFY_APP_JWT_SECRET=SECRET_KEY_TOKEN_HERE
PORT=8081
```
