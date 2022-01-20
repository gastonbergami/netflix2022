This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Inicializacion del proyecto

npx create-react-app 2022netflix --template redux

### Proceso de limpieza

### Importar las librerias

- material-ui/core,axios,firebase,react-router-dom,react-uuid, styled components

### App.js layout initial

- Creamos las rutas
- Renderizamos Login o el resto del app condicionado a la existencia de un usuario

### Styles

- Utilizamos useStyle para crear una infraestructura que nos permita asignar estilos a cada uno de los componentes

### Crear las carpetas de componentes : pages

- Creamos la insfraestructura basica de los componentes que representan una pagina: Home,Login,Paypal;Profile,SignUp

### Estilos en los componentes de Pages

- Patron para añadir la infraestructura de estilos a todos loas components pagina

### Crear la carpeta de Components , con componentes secundarios

- Creamos la insfraestructura basica del resto de los componentes : Pagina,Banner, Header , Plans Row

### Estilos de components

- Patron para añadir la infraestructura de estilos a todos loas components pagina

### Trabajamos con el header

- Importamos el logo

- Añadimos al navbar una clase transparente condicional. Esta clase se activa si la variable show = true.

- Para cuando el usuario hace un scroll vertical ,añadimos un eventListener al objeto window.

- El eventListener es acticvo una sola vez ,hasta que resfrescamos la pagina .

- Una vez montado el componente , hay que limpiarlo para que no nos quede colgado el eventListener

- Añadimos las rutas a logo y avatar

### Comenzamos a trabajar en el Banner

- Importamos una image como backgroundImage

- En React, tenemos que acompañar las backgroundImagescon estilos como object-fit,background-size y background-position

- Hemos posicionado el titulo de la peli, unos botones y la description

- Añadi un div vacio, que oscurece la imagen hasta fusionar con el resto de la UI, que es oscuro

### Comenzamos a trabajar en el Login

- Cramos un button con styled components y le hemos llamado NetfButton. Este boton esta customizado y podremos variar su longitud , y otros estilos pasandoles props.

- Styled components para varirar los estilos del input o del boton, pero para su posicionamiento, le damos una clase normal.

- Hemos creado un input personalizado en Styled components. Le hemos llamado NetfInput. Como es un componente de marterial UI , lo hemos llamado styled(InputButton)

### Componente Profile

- Hemos trabajado en la distribucion
- <Plans>texto </Plans>
  `const Plans = ({children})=> { return () }`
- Pasar props a los styled components
- en el caso de que el componente no sea binario, lo solucionamos con una funcion.

### SingUp

- Renderizado condicional. Hemos creado una variable singIn.
- SI la varieble es falsa, desplegamos el formulario.

### Porceso de registro / SignIn

- Habilitado una cuenta en Firebase
- Inicializado el objeto auth
- capturado el value de los inputs
- registrado email y password con auth
- Signin con auth

### Redux

- Habilitamos el slice userSlice para manejar el usuario en el componente que queramos

### Persistencia

- Hemos añadido un "event listener" en App.js
- este event lo trae el ob auth de firebase, escucha cada vez que cambia el usuario en la capa de datos de userSlice en redux

- De esta manera recordamos que ya estamos dentro aunque refresquemos la pagina

### Request

- vamos a contruir este componente ROW
- Hemos hablitados todos los endpoints para acceder a themovieDB y extraer los distintos objetos con toda la informacio por genero
-
