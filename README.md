# Esta app es un ejemplo sencillo del uso del hook useState de React

Como parte de las clases de programación, con este ejemplo pueden ver cómo funciona el hook useState de React.

## ¿Cómo funciona?

El hook useState de React nos permite manejar el estado de un componente de forma sencilla. Para ello, debemos importar el hook useState de React y crear una variable que almacene el estado y una función que nos permita actualizar el estado.

```js
import React, { useState } from 'react';
```

```js
const [count, setCount] = useState(0);
```

En este ejemplo, la variable count almacena el estado y la función setCount nos permite actualizar el estado. En este caso, el estado es un número que inicialmente vale 0.

## ¿Cómo se usa?

Para usar el hook useState, debemos llamar a la función setCount y pasarle el nuevo valor del estado. Por ejemplo, si queremos incrementar el valor del estado en 1, podemos hacer lo siguiente:

```js
setCount(count + 1);
```

## ¿Cómo se ve?

Para ver el resultado, podemos usar la variable count en el JSX. Por ejemplo, si queremos mostrar el valor del estado en un párrafo, podemos hacer lo siguiente:

```js
<p>Has hecho click {count} veces</p>
```

## ¿Cómo se actualiza?

Para actualizar el estado, debemos llamar a la función setCount y pasarle el nuevo valor del estado. Por ejemplo, si queremos incrementar el valor del estado en 1, podemos hacer lo siguiente:

```js
setCount(count + 1);
```

## ¿Cómo se inicializa?

Para inicializar el estado, debemos pasarle un valor a la función useState. Por ejemplo, si queremos inicializar el estado en 0, podemos hacer lo siguiente:

```js
const [count, setCount] = useState(0);
```

## ¿Cómo se usa con un formulario?

Para usar el hook useState con un formulario, debemos pasarle el estado y la función setCount a los atributos value y onChange de los elementos del formulario. Por ejemplo, si queremos usar el hook useState con un input de tipo text, podemos hacer lo siguiente:

```js
<input type="text" value={name} onChange={e => setName(e.target.value)} />
```

## ¿Cómo se usa con un checkbox?

Para usar el hook useState con un checkbox, debemos pasarle el estado y la función setCount a los atributos checked y onChange del elemento del formulario. Por ejemplo, si queremos usar el hook useState con un checkbox, podemos hacer lo siguiente:

```js
<input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
```

## ¿Cómo se usa con un select?

Para usar el hook useState con un select, debemos pasarle el estado y la función setCount a los atributos value y onChange del elemento del formulario. Por ejemplo, si queremos usar el hook useState con un select, podemos hacer lo siguiente:

```js
<select value={selected} onChange={e => setSelected(e.target.value)}>
  <option value="A">A</option>
  <option value="B">B</option>
  <option value="C">C</option>
</select>
```

## ¿Cómo se usa con un textarea?

Para usar el hook useState con un textarea, debemos pasarle el estado y la función setCount a los atributos value y onChange del elemento del formulario. Por ejemplo, si queremos usar el hook useState con un textarea, podemos hacer lo siguiente:

```js
<textarea value={text} onChange={e => setText(e.target.value)} />
```

## ¿Cómo se usa con un formulario con selector, checkbox y otros campos?

Para usar el hook useState con un formulario, debemos pasarle el estado y la función setCount a los atributos value y onChange de los elementos del formulario. Por ejemplo, si queremos usar el hook useState con un formulario, podemos hacer lo siguiente:

```js
<form>
  <input type="text" value={name} onChange={e => setName(e.target.value)} />
  <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)} />
  <select value={selected} onChange={e => setSelected(e.target.value)}>
    <option value="A">
        A
    </option>
    <option value="B">
        B
    </option>
    <option value="C">
        C
    </option>
    </select>
    <textarea value={text} onChange={e => setText(e.target.value)} />
</form>
```

Estos son ejemplos de cómo usar el hook useState de React. Para ver el resultado, puedes ver el código o levantar el proyecto con el comando npm start.

## ¿Cómo levantar el proyecto?

Para levantar el proyecto, debes clonar el repositorio y ejecutar el comando npm start.

```bash
git clone
cd todo-app-react
npm install
npm start
```

## ¿Cómo funciona el proyecto?

El proyecto está hecho con React y usa el hook useState para manejar el estado de la aplicación. El proyecto tiene 3 componentes: App, TodoList y TodoForm. El componente App es el componente principal y tiene el estado de la aplicación. El componente TodoList muestra la lista de tareas y el componente TodoForm permite agregar tareas.

## Espero que sea de utilidad

Espero que este artículo te haya servido para aprender a usar el hook useState de React. Si te gustó, te invito a que me agregues en LinkedIn. También puedes ver mis otros artículos.
