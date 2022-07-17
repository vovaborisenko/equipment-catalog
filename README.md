# Vue 3 + Pinia + Vue Router + SCSS + Vite

 SPA каталога инвентаря https://vovaborisenko.github.io/equipment-catalog/

## Структура проекта

```sh
src // исходники проекта
  api // инстансы для http запросов (используется axios)
  assets // в этой папке находятся все исходники изображений, иконок, шрифтов, стилей
  components // папка со всеми переиспользуемыми компонентами
  plugins // кастомные плагины проекта 
  router // файлы роутера (VueRouter)
  services // сервисы запросов к данным через api
  stores // модули стор менеджера (Pinia)
  utils // вспомогательные функции проекта
  views // компоненты представления для роутов приложения

App.vue // корневой компонент приложения
main.js // начальный файл приложения
```

## Некоторые пояснения

- Создан кастомный плагин, который все svg-иконки из папки `/src/assets/icons` преобразует в глобальные vue компоненты.
- Создан кастомный плагин для нотификаций.
- В проекте используется фейковый RestAPI от [JSONPlaceholder](https://jsonplaceholder.typicode.com/guide/). Данные при добавлении и редактирование не изменяются на сервере.
- Работа модального окна по изменению имени основана на промисах что позволяет управлять его отображением в зависимости от исхода промиса.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
