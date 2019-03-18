# React Starter

An opinionated [React](https://github.com/facebook/react) starter project built with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- Yarn ^1.15.2
- Node ^11.12.0

## Getting Started

1.  Create a `.env` file in the root of the project with the following:

        REACT_APP_API_URL=https://jsonplaceholder.typicode.com
        REACT_APP_URL=http://localhost:8080

2.  Install the dependencies

        yarn

3.  Start development server

        yarn start

## Project Organization

```
@models
  [name].ts

@services
  [name].ts

@state
  [feature]
    actions.ts
    reducers.ts
    selectors.ts
    types.ts
  types
    [name].ts
  utils
    [name.ts]
  root.ts
  store.ts

views
  @styles
  @components
  @pages
```

## TODO
* Routes / Authentication
* i18n
* Map errors to translation strings
* Pagination
* Storybook
* Cypress
* Transitions / animations
