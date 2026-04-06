# Proyecto: Máquina Expendedora en TypeScript

Este repositorio contiene el desarrollo de una simulación de una máquina expendedora, creado como un proyecto práctico para aprender y aplicar conceptos de **Programación Orientada a Objetos (POO)**, **Desarrollo Guiado por Pruebas (TDD)** y **TypeScript**.

El proyecto se encuentra actualmente **en desarrollo**.

## Características Implementadas

*   Modelo de entidades básicas (`VendingMachine`, `Product`, `Coin`).
*   Lógica para aceptar monedas y acumular crédito.
*   Suite de tests unitarios para validar el comportamiento principal.

## Tecnologías Utilizadas

*   [TypeScript](https://www.typescriptlang.org/)
*   [Node.js](https://nodejs.org/)
*   [Jest](https://jestjs.io/) para la ejecución de tests unitarios.

## Cómo Empezar

Sigue estas instrucciones para obtener una copia del proyecto y ejecutarlo en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalado [Node.js](https://nodejs.org/). Se recomienda usar las versiones 18.x o 20.x, ya que el proyecto se prueba contra ellas.

```sh
node --version
```

### Instalación

1.  Clona el repositorio (si aún no lo has hecho):
    ```sh
    git clone <URL-DEL-REPOSITORIO>
    ```
2.  Navega a la carpeta del proyecto:
    ```sh
    cd Typescript-Learning-and-Practice
    ```
3.  Instala las dependencias de npm:
    ```sh
    npm install
    ```

## Ejecución de Tests

Para ejecutar la suite de tests unitarios y verificar que todo funciona como se espera, utiliza el siguiente comando:

```sh
npm test
```

## Integración Continua (CI)

Este proyecto utiliza **GitHub Actions** para ejecutar automáticamente los tests en cada `push` y `pull request` a la rama `main`. Esto asegura que el código nuevo no rompa la funcionalidad existente. Puedes ver el estado de las ejecuciones en la pestaña "Actions" del repositorio.

## Notas Adicionales (DESARROLLADOR)

Typescript permite agilizar el proceso al declarar y asignarle el valor con el constructor.
Tipado Nominal: a typescript no le importa el nombre del tipo, le importa su estructura. EJ imprimimos el nombre de un producto y de una persona y ambas funcionan debido a que al lenguaje le importa su comporatamiento, no de donde viene

Cada clase definida solo existe dentro de ella, para conectar los archivos usamos el EXPORT: que ofrece algo al exterior para ser utilizado por otros. IMPORT: permite pedir algo de otros archivos.
Es decir en java se importaba desde un espacio de nombres o paquete, desde Typescript se importa directo desde un archivo.

En TypeScript en los tests no se definen los métodos dentro de una clase, sino en la invocación de funciones globales (como it o test). Para organizar y jerarquizar estas pruebas, se utiliza la función describe, la cual permite agrupar los tests en bloques anidados que funcionan como 'carpetas virtuales', facilitando la lectura y el mantenimiento del código sin depender de una estructura rígida de clases."


## Principios de POO...

1_ Aplicacion de herencia mediante la clase producto, la cual en su constructor contiene nombre, precio, cantidad, peso. La cual la heredan las clases hijas de Drinks y Snacks para evitar instanciar productos genericos.

2_ Aplicacion de abstraccion mediante la clase abstracta de Product para que nadie pueda crear un "producto" genérico. Es decur todo lo que sea un producto en esta máquina debe tener nombre, precio, cantidad y peso". Usando la logica en la VendingMachine esta no necesita saber si esta manejando un Snack o Drink, solo necesita saber que esta manejando un Producto.

3_Aplicacion de Polimorfismo usando un metodo abstracto que se encarga de obtener la descripcion del producto, entonces la clase product se describe con el nombre y el peso. La clase drinks se comporta implementando el mismo metodo con el nombre y volumen.

4_Aplicacion de Encapsulamiento usando atributos private de la clase VendingMachine y poder acceder a ellos mediante metodos publicos como getCurrentCredit()

Implementacion de una sencilla interfaz que obliga a cualquier clase que la implemente a tener un método getDescription() implementada por Product que devuelva un string.