<a name="readme-top"></a>

[![Vite][vite.js]][vite-url] [![Typescript][typescript]][typescript-url] [![rtk-toolkit][rtk-toolkit.js]][rtk-toolkit-url] [![Tailwindcss][tailwindcss]][tailwindcss-url]

<br />

<!-- PROJECT LOGO -->
<p align="center" >
  <a  href="https://github.com/Symmetrics-Lab/dashboard-basic">
    <img src="https://symlab.io/foot-icon.svg" alt="Logo">
  </a>
    <h3 align="center">REACT-UI</h3>
    <p align="center">
    Componentes customizados 
    <br />
  </p>
</p>

 El objetivo de este repositorio con componentes customizados es facilitar el desarrollo de aplicaciones web/movil en un corto periodo de tiempo.

<!-- TABLE OF CONTENTS -->
<details>
  <summary><strong>Tabla de Contenido</strong></summary>
  <ol>
    <li>
      <a href="#requisitos">Requisitos</a>
    </li>
      <li>
      <a href="#instalación">Instalación</a>
    </li>
      <li>
      <a href="#componentes">Componentes</a>
      <ul>
        <li><a href="#componentes-de-navegación">Componentes de navegación</a></li>
        <li><a href="#componentes-de-tabla">Componentes de tabla</a></li>
      </ul>
    </li>
    <li>
      <a href="#uso">Uso</a>
      <ul>
        <li><a href="#configurar-tailwind">Configurar tailwind</a></li>
        <li><a href="#paleta-de-colores">Paleta de colores</a></li>
        <li><a href="#configurar-la-paleta-de-colores">Configurar la paleta de colores</a></li>
        <li><a href="#componente-loading">Componente Loading</a></li>
        <li><a href="#componente-logo">Componente logo</a></li>
      </ul>
    </li>
    <li><a href="#release-actual">Release Actual</a></li>
  </ol>
</details>

### Requisitos

Esta librería está desarrollada con tailwind, para su correcto funcionamiento es necesario tener instalada esta librería.

   ```sh
      npm install tailwindcss autoprefixer postcss-cli
   ```


### Instalación

Usando NPM:
   ```sh
   npm i --save @symlab/react-ui 
   ```
Usando Yarn
   ```sh
   yarn add @symlab/react-ui 
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Componentes

A continuación se mencionan los componentes existentes en la actualidad:

| nombre       | componente        | soporte formulario     | soporte ligth/dark  | atributos |
| :---         | :---              |  :---:                 | :---:               | :---:  | 
| Autocomplete | `<Autocomplete/>` | ✅                     | ✅                  | `value, setValue, options, label?, disabled?, icon?, id, hasError?, errorText?, helperText?, placeholder?, onForm?, onInputChange?, className?, variant?`     |
| Button       | `<Button></Button>`       | ✅                     | ✅                  | `className?, children?, disabled?, icon?, iconPosition?, onClick?, rounded?, size?, type?,   variant?, atributos del elemento button`      |
| Checkbox     | `<Checkbox></Checkbox>`          | ✅                     | ✅                  | `id, key?, className?, textPosition?, sizes?, variant?, disabled?, required?, rounded?, checked?, value?, atributos del elemento input`     |
| Chip     | `<Chip></Chip>`          |       ❌               | ✅                  | `key?, className?, icon?, iconPosition?, iconSize?, variant?, children`     |
| Dropdown     | `<Dropdown></Dropdown>`          |       ❌               | ✅                  | `className?, srLabel?, children, label?, icon?`     |
| DropdownItem     | `<DropdownItem></DropdownItem>`          |       ❌               | ✅                  | `className?, link, disabled?, as?, children?, onClick?`     |
| HelperText     | `<HelperText></HelperText>`          |       ❌               | ✅                  | `id, children, className?, hasError?`     |
| Input     | `<Input/>`          |       ✅               | ✅                  | `id, type?, className?, hasError?, isValid?, showIconValid?, , atributos del elemento input`     |
| Label     | `<Label/>`          |       ❌               | ✅                  | `text, id, disabled?, required?, hint?, hidden?, atributos del elemento label`     |
| ListBox     | `<Listbox/>`          |       ✅                | ✅                  | `value (labelField, data), setValue, options, label?, disabled?, id, hasError?, errorText?, helperText?, placeholder?, onForm?, optionClassName?`     |
| Loading     | `<Loading></Loading>`          |       ❌               | ✅                  | `key?, className?, children?`     |
| Modal     | `<Modal></Modal>`          |       ❌               | ✅                  | `showModal, setShowModal, onClose?, id?, children?, className?`     |
| PasswordField     | `<PasswordField/>`          |       ✅               | ✅                  | `label, id, className?, helperText?, hideLabel?, hasError?, isValid?, errorText?, hint?, ref?, validation? (minLength?, lowerCase?, upperCase?, number?, specialCharacter?), showValidation?, message?, atributos del elemento input`     |
| Select     | `<Select/>`          |       ✅                | ✅                  | `id, label?, children?, className?, hasError?, isValid?, options, value, auxOption?, atributos del elemento select`     |
| Switch     | `<Switch/>`          |       ✅                | ✅                  | `id, key?, className?, size?, hasError?, variant?, disabled?, toggle?, onClick, iconLeft?, iconRight?, atributos del elemento button`     |
| TextArea     | `<Textarea></Textarea>`          |       ✅               | ✅                  | `id, hideLabel?, className?, hasError?, isValid?, children?, minRows?, errorText?, helperText?, atributos del elemento textArea`     |
| TextField     | `<TextField></TextField>`          |       ✅               | ✅                  | `label?, id, type?, className?, helperText?, hideLabel?, hasError?, isValid?, errorText?, hint?, ref?, atributos del elemento input`     |
| Timeline     | `<Timeline></Timeline>`          |       ❌               | ✅                  | `id?, className?, icon?, items (title, date?, description?, icon?)`     |


<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Componentes de navegación

A continuación se mencionan los componentes existentes en la actualidad:

| nombre       | componente        | soporte ligth/dark  | atributos |
| :---         | :---              |  :---:               | :---:  | 
| Logo     | `<Logo></Logo>`       | ✅                  | `src, className?, classNameMobile?, href?, alt?, title?, srcMobile?, altMobile?`     |
| NavBar     | `<NavBar></NavBar>`       | ✅                  | `logo, leftItems?, rightItems?, itemsMobile? (label, link, current?)`     |
| SubMenu     | `<SubMenu></SubMenu>`       | ✅                  | `className?, items?(name, link, className?, current?, icon?), as?, currentPath?, classNameItem?, userData? (img, lastSesion, name, label?)`     |
| TopMenu     | `<TopMenu/>`       | ✅                  | `className?, items(label, link, className', current?), as?, currentPath?`     |
| TopMenuItem     | `<TopMenuItem/>`       | ✅                  | `label, link, className', current?`     |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Componentes de tabla

A continuación se mencionan los componentes existentes en la actualidad con soporte de formulario:

| nombre       | componente        | soporte ligth/dark  | atributos |
| :---         | :---              |  :---:               | :---:  | 
| Table     | `<Table></Table>`       | ✅                 |  *Mas información abajo*     |
| TableFilterRow     | `<TableFilterRow></TableFilterRow>`       | ✅                  | `logopropsInput? (type?, className?, placeholder?), column`     |
| EditableCell     | `<EditableCell></EditableCell>`       | ✅                  | `getValue, row, column, recordValue, editable?)`     |
| IndeterminateCheckbox     | `<IndeterminateCheckbox/>`       | ✅                  | `className?, indeterminate?, atributos del elemento input`     |

Atributos del componente Table

<pre> 
    export interface TableProps {
      className?
      hasError?
      Padding?
      Size?
      title?
      columns
      data;
      localization?: {
         body?: {
          emptyDataSourceMessage?
        };
      };
      options?:{
          sorting?
          filtering?
          footer?
          hiddenColumns?
          skipPageReset?
          getSelection?
      }
    }
</pre>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Uso

### Configurar tailwind

Para configurar nuestra librería en su proyecto, debemos dirigirnos al archivo de configuración de tailwind **tailwind.config**

En caso de no contar con este archivo, debemos crearlo

```sh
   npx tailwindcss init
```

Obtendremos lo siguiente

```js
   module.exports = {
      content: [],
      theme: {
        extend: {},
      },
      plugins: [],
   }
```
Dentro de esta configuración básica que nos genera tailwind, agregaremos las siguientes líneas

```js
   module.exports = {
      content: ['./node_modules/@symlab/react-ui/dist/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
        extend: {},
      },
      plugins: [require('@tailwindcss/forms'), require('./node_modules/@symlab/react-ui/dist/tailwind.config.cjs')],
   }
```

Listo, ahora ya podemos trabajar con los componentes.


### Paleta de colores

Los componentes se desarrollaron en base a colores predefinidos, para conocer cuáles son, existe el componente `<Pallete />`

Importe el componente

```jsx
   import { Pallete } from "@symlab/react-ui";
   function Component() {
        return (
            <>
                <Pallete />
            </>
        );
   }
   export default Component;

```

<img width="1259" alt="Captura de pantalla 2023-03-15 a la(s) 18 02 48" src="https://user-images.githubusercontent.com/106690363/225441811-f0e81085-799b-4f4e-ac75-85935da8de26.png">



<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Configurar la paleta de colores

Para realizar un cambio customizado en los colores, es necesario fijarse en la paleta de colores su brand (todos con prefijo `sym-`).

Por ejemplo, el brand `sym-primary`, su valor por defecto es el color primario de symlab. Si lo deseamos cambiar, es necesario usar este brand y sustituir su valor.

Esta configuración es posible dentro del archivo de configuración de tailwind.

Sigue estos pasos:

1. Ir al archivo `docs/tailwind.config.cjs`
   
2. Dentro de esa configuración, buscaremos el atributo extend

   ```js
   theme: {
     extend: {
    ....
   ```
 

3. Sobreescribir el valor del brand sym-primary

```js
   module.exports = {
      content: ['./node_modules/@symlab/react-ui/dist/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
        extend: {
          colors: {
            'sym-primary': '#9474ff',   // <-- actualizamos el valor del brand sym-primary
          }
        },
      },
      plugins: [require('@tailwindcss/forms'), require('./node_modules/@symlab/react-ui/dist/tailwind.config.cjs')],
   }
```

Listo!


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Componente Loading

Importaremos el componente desde nuestro archivo

```js
   import { Loading } from '@symlab/react-ui';
```
Mandaremos por el children lo que se mostrará dentro del Loading


```js
   import { Loading } from '@symlab/react-ui';

   export default function LoadingPage() {
      return (
        <>
          <Loading>
            <svg>
              ....
            </svg>
          </Loading>
        </>
      );
   }
```

Si lo que buscamos es cambiar el fondo de nuestro loading a un color rojo, lo podremos hacer de la siguiente manera:

Agregaremos el atributo className en Loading

   ```js
   <Loading className="bg-red-500">
     Nuevo loading
   </Loading>
   ```



```js
   import { Loading } from '@symlab/react-ui';

   export default function LoadingPage() {
      return (
        <>
          <Loading className="bg-red-500"> // <-- atributo className 
            <svg>
              ....
            </svg>
          </Loading>
        </>
      );
   }
```

Y listo!


<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Componente logo

Este componente se encuentra dentro de los componentes de navegación, lo usaremos dentro del componente `<Navbar />` para mayor ilustración 

1. Importar los componentes
  
   ```js
      import { Logo, NavBar} from '@symlab/react-ui';
   ```

2. Trabajaremos con Navbar para mostrar la barra de navegación y dentro de sus atributos enviaremos al logo

   ```js
      import { Logo, NavBar} from '@symlab/react-ui';
      
      const LogoElement = () => (
        <Logo src="https://symlab.io/foot-icon.svg" alt="SymLab" href="/" title="Go to home page" />
      );

      export default function Navbar() {
         return (
           <>
             <NavBar
                logo={<LogoElement />}
              >
           </>
         );
      }
   ```


Y listo!


<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Release Actual

- v0.0.6

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
