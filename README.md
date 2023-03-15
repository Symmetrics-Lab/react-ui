<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<p align="center" >
  <a  href="https://github.com/Symmetrics-Lab/dashboard-basic">
    <img src="https://symlab.io/foot-icon.svg" alt="Logo">
  </a>
  <h3 align="center">React UI</h3>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Tabla de Contenido</strong></summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del Proyecto</a>
      <ul>
        <li><a href="#desarrollado-con">Desarrollado con</a></li>
         <li><a href="#estructura-del-repositorio">Estructura del repositorio</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#instalacion">Instalacion</a>
    </li>
    <li>
      <a href="#uso">Uso</a>
      <ul>
        <li><a href="#ejecutar-el-programa">Ejecutar el programa</a></li>
      </ul>
    </li>
     <li>
      <a href="#componentes">Componentes</a>
    </li>
    <li>
      <a href="#estructura-general-de-los-componentes">Estructura general de los componentes</a>
    </li
    <li><a href="#templates">Templates</a>
       <ul>
        <li><a href="#login">Login</a></li>
        <li><a href="#register">Register</a></li>
        <li><a href="#recovery-page">Recovery page</a></li>
        <li><a href="#change-password">Change password</a></li>
      </ul>
    </li>
     <li><a href="#paleta-de-colores">Paleta de colores</a>
       <ul>
        <li><a href="#cambio-en-la-paleta-de-colores">Cambio en la paleta de colores</a></li>
      </ul>
    </li>
    <li><a href="#cambio-del-logo">Cambio del logo</a></li>
    <li><a href="#cambio-del-loading">Cambio del loading</a></li>
    <li><a href="#release-actual">Release Actual</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Acerca del Proyecto

El objetivo de este repositorio con componentes customizados es facilitar el desarrollo de aplicaciones web/movil en un corto periodo de tiempo.

Puedes trabajar con estos componentes descargando esta librería desde [npm](https://www.npmjs.com/package/@symlab/react-ui).



### Desarrollado con

Esta aplicación ha sido desarrollada utilizando las siguientes librerías y frameworks

[![Vite][vite.js]][vite-url] [![Typescript][typescript]][typescript-url] [![rtk-toolkit][rtk-toolkit.js]][rtk-toolkit-url] [![Tailwindcss][tailwindcss]][tailwindcss-url] [![Playwright][playwright.js]][playwright-url]



### Estructura del repositorio
El proyecto está compuesto por dos workspaces:
- `docs/` :Contiene la documentación y uso de los componentes creados.

- `library/` :Es el workspace que se encarga de crear y reconstruir los componentes customizados de symlab.




### Instalacion

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/Symmetrics-Lab/react-ui
   cd react-ui
   ```
2. Instale las dependencias NPM del repositorio
   ```sh
   npm install
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->

## Uso

### Ejecutar el programa

```sh
cd react-ui/docs
npm run dev
```

El sistema esta listo! Ingresa al [Dashboard](http://localhost:5173/) en tu navegador, lo podrá revisar en modo light y dark.


### Componentes
A continuación se mencionan los componentes existentes en la actualidad:
- Autocomplete
- Button
- Checkbox
- Chip
- Dropdown
- DropdownItem
- HelperText
- Input
- Label
- ListBox
- Loading
- Modal
- PasswordField
- Select
- TextArea
- TextField
- Timeline
- Navigation
  - Logo
  - NavBar
  - SubMenu
  - TopMenu
  - TopMenuItem
  - TopMenuMobile
  - TopMenuMobileItem
- Datatable
  - IndeterminateCheckbox
  - TableFilterRow
  - Table
  - EditableCell  

Los componentes están desarrollados para ser usados con tema light y dark.



<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Estructura general de los componentes

Algunos componentes comparten atributos en común, variant, size, iconLeft, icon, iconPosition, rounded, isLoading, className, etc.

En cambio los componentes de formulario tendrán atributos adicionales: onForm, control, hasError, errorText, etc, e incluso sus atributos originales.



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Template

Existen templates que hacen uso de los componentes básicos de formulario.

Estos templates están desarrollados con mocks, de esta manera es mucho mas sencillo ver la configuración necesaria para su uso en un caso real.

Para conocer el template y el comportamiento de los componentes customizados, es necesario tener corriendo el workspace docs.

```sh
cd react-ui/docs
npm run dev
```
Abrir el navegador con el siguiente enlace http://localhost:5173/


### Login
Daremos click en `Login` desde el menú del dashboard o ingresando al siguiente enlace http://localhost:5173/login.

### Register
Daremos click en `Register` desde el menú del dashboard o ingresando al siguiente enlace http://localhost:5173/register.

### Recovery page
Daremos click en `Login` desde el menú del dashboard o ingresando al siguiente enlace http://localhost:5173/login y click en la opción de `Forgot password?` o ngresando al siguiente enlace http://localhost:5173/recovery-page.

### Change password
Daremos click en el ícono de perfil desde el menú del dashboard, click en `Profile` y en la opción que nos muestra en la parte izquiera `Password` o ingresando al siguiente enlace http://localhost:5173/profile/password.

Listo, podemos hacer las pruebas necesarias de su comportamiento!


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Paleta de colores

Para conocer las paleta de colores, es necesario tener corriendo el workspace docs.
```sh
cd react-ui/docs
npm run dev
```

Abrir el navegador con el siguiente enlace http://localhost:5173/

Seleccionar `Pallete` desde el menú del dashboard o ingresando al siguiente enlace http://localhost:5173/palette

Listo, allí tendremos el listado de colores configurados para los componentes.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Cambio en la Paleta de colores

Para realizar un cambio customizado en los colores, es necesario fijarse en la paleta de colores su brand (todos con prefijo `sym-`).

Por ejemplo, el brand `sym-primary`, su valor por defecto es el color primario de symlab. Si lo deseamos cambiar, es necesario usar este brand y sustituir su valor.

Sigue estos pasos:

1. Ir al archivo `docs/tailwind.config.cjs`

   Encontraremos un archivo de configuración de tailwind, al final de esta configuración notaremos que esta importada la configuración de tailwind usada para el workspace de library.
   
2. Dentro de esa configuración, buscaremos el atributo extend

   ```sh
   theme: {
     extend: {
    ....
   ```
 
3. Sobreescribir el valor del brand sym-primary
   ```sh
   theme: {
     extend: {
       "sym-primary":'#0070FF'
          ....
   ```
 
Listo!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Cambio del Loading
1. Abriremos el archivo `docs/src/components/LoadingPage.tsx`

   Notaremos que el componente Loading de la librería contiene un children con un svg.
   
   ```sh
   <Loading>
     <svg>
     ...
     </svg>
   </Loading>
   ```

2. Reemplazar el children por el nuevo.

   ```sh
   <Loading>
     Nuevo loading
   </Loading>
   ```

Si lo que buscamos es cambiar el fondo de nuestro loading a un color rojo, lo podremos hacer de la siguiente manera:

3. Agregaremos el atributo className en Loading
   ```sh
   <Loading className="bg-red-500">
     Nuevo loading
   </Loading>
   ```

Y listo!


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Release Actual

- v1.0.0

<!-- CONTACT -->

## Contacto

- Olivers De Abreu - [https://symlab.io](https://symlab.io) - [olivers@symlab.com](mailto:olivers@symlab.com)
- Fabián Paredes - [https://symlab.io](https://symlab.io) - [fabian@symlab.com](mailto:fabian@symlab.com)

Project Link: [https://github.com/Symmetrics-Lab/react-ui](https://github.com/Symmetrics-Lab/react-ui)

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/Symmetrics-Lab/react-ui.svg?style=for-the-badge
[contributors-url]: https://github.com/Symmetrics-Lab/react-ui/graphs/contributors
[issues-shield]: https://img.shields.io/github/issues/Symmetrics-Lab/react-ui.svg?style=for-the-badge
[issues-url]: https://github.com/Symmetrics-Lab/react-ui/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[typescript]: https://img.shields.io/badge/typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[vite.js]: https://img.shields.io/badge/Vite-20232A?style=for-the-badge&logo=vite&logoColor=61DAFB
[vite-url]: https://vitejs.dev/
[rtk-toolkit.js]: https://img.shields.io/badge/rtk%20toolkit-593d88?style=for-the-badge&logoColor=593d88
[rtk-toolkit-url]: https://redux-toolkit.js.org/
[tailwindcss]: https://img.shields.io/badge/tailwindcss-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwindcss-url]: https://tailwindcss.com/
[playwright.js]: https://img.shields.io/badge/Playwright-20232A?style=for-the-badge&logo=playwright&logoColor=61DAFB
[playwright-url]: https://playwright.dev/









