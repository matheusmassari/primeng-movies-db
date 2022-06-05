# Configurando PrimeNG

```
ng new seu-projeto
npm i primeng --save
npm i primeicons --save
npm i primeflex --save
```

## 2. Configurar angular.json

No arquivo angular.json, editar styles:

```
"styles": [
              "src/styles.scss",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeflex/primeflex.css",
              "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],
```

No arquivo global de styles do projeto:

```
@import "primeng/resources/primeng.min.css";
@import "primeng/resources/themes/lara-light-blue/theme.css";
@import "primeicons/primeicons.css";
@import "primeflex/primeflex.css"
```

```
ng serve
```

## 3. Gerar Modulos em lazy loading


```
ng g m exemplo --routing
ng g c exemplo/componente
```

No arquivo de roteamento na raiz do projeto criar rota de redirecionamento em lazy loading:

```
const routes: Routes = [
  {
    path: '',
    redirectTo: 'exemplo',
    pathMatch: 'full',
  },
  {
    path: 'exemplo',
    loadChildren: () => import('./exemplo/exemplo.module').then(m => m.ExemploModule)
  }
];
```
