# React Starter

An opinionated [React](https://github.com/facebook/react) starter project built with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

- Yarn ^1.15.2
- Node ^11.12.0

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
* Routes / Authentication
* i18n
* Styles
* Pagination
* Cypress
* Map errors to translation strings
* Transitions / animations
