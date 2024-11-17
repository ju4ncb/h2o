# Denpendencies used with NPM:

- npm install
- react-hook-form
- sass
- lucide-react
- sweetalert2

# Created by

- Juan Caballero - Scrum Master
- Juan Perez - Product Owner
- Juan Montenegro - Developer
- Andres Solano - Developer
- Francisco Sosa - Developer

# Instrucciones

### Instalar dependencias

En la carpeta raiz del proyecto, instalar las dependencias listadas arriba en Dependencies used with NPM en este documento.

### Cambios en los tipos de las dependencias

#### User en express-session

Una vez instaladas las dependencias, en el archivo /node_modules/@types/express-session/index.d.ts, al inicio agregue el importe del siguiente archivo:

```typescript
import { JugadorTipo } from "../../../server/clases/Jugador";
```

Luego agregar el siguiente bloque de código en la línea 37:

```typescript
declare module "express-session" {
  interface SessionData {
    user?: JugadorTipo;
  }
}
```

### User en pageContext

En el archivo /node_modules/vike/dist/esm/shared/types.d.ts, al inicio agregue el importe del siguiente archivo:

```typescript
import { JugadorTipo } from "../../../../../server/clases/Jugador.ts";
```

Luego inserte un espacio luego de la línea 115 y agregue la siguiente línea de código:

```typescript
user: JugadorTipo;
```

### Base de datos (Realizar antes de correr la página)

La base de datos se encuentra en /server/bd.sql, por favor cree todas las tablas en un schema de mysql, el nombre del schema, usuario y contraseña los debe cambiar en /server/dbConfig.ts y una vez esté conectada la base de datos, inserte las filas en el archivo /server/insert-values.sql

### Como iniciar la página

La página se inicia escribiendo en alguna terminal "npm run dev" (debe tener instalado Node.js) desde la carpeta raiz de este proyecto, y la página posee información acerca del equipo, un inicio con instrucciones y algo de información del producto, una página de inicio de sesión y registro, para editar credenciales, otra para administrar y por último un demo de nuestro juego como tal.

### Administrar

Para poder administrar el contenido de la página, ingrese con el usuario "zent" y la contraseña "test", así podrá agregar o eliminar preguntas en la página administrate.

### Jugar

Para poder jugar presiona en el botón de Jugar demo desde la página de inicio, el navbar, o desde la ruta de la página http://localhost:3000/play.
