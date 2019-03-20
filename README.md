# React Starter

A pleasant little starter project bootstrapped with [Create React App](https://facebook.github.io/create-react-app/).

## Requirements

- Yarn ^1.15.2
- Node ^11.12.0

## What You Get

- [React 16](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [React Router 5](https://reacttraining.com/react-router/)
- [Auth0](https://auth0.com/)
- [Storybook](https://storybook.js.org/)
- [Jest](https://jestjs.io/)

## Getting Started

1.  Create a `.env` file in the root of the project with the following:

        REACT_APP_API_URL=https://jsonplaceholder.typicode.com
        REACT_APP_URL=http://localhost:8080
        REACT_APP_AUTH0_DOMAIN=[your auth0 domain]
        REACT_APP_AUTH0_CLIENT_ID=[your auth0 client ID]
        REACT_APP_AUTH0_AUDIENCE=[your auth0 audience]

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
  [name]
    actions.ts
    reducers.ts
    selectors.ts
    types.ts
    index.ts
  types
    [name].ts
  utils
    [name.ts]
  root.ts
  store.ts

views
  @styles
  @components
    [name]
      [name].tsx
      [name].stories.tsx
      [name]Container.tsx
      index.ts
  @pages
    [name].tsx
    index.ts
```

## TODO
* Styles
* i18n
* Forms
* Cypress
* Pagination
* Map errors to translation strings
* Transitions / animations
