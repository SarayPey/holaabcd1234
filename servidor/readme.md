typescript es una libreria que permite agregar tipos de datos, por ejemplo

```ts
type Animal = {
  cola: boolean;
  patas: number;
};
```

el tipo animal es un objeto que tiene 2 propiedades, cola que es un boolean y patas que es un number

```ts
const perro: Animal = {
  cola: true,
  patas: 4,
};
```
