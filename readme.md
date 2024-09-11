## (Still developing it, early stages)

# Entablador.js - DataTables's library

To be able to edit and upload changes from the table easily.
It's meant to be used with FireStore on the backend.

## Dependencies on the code

(This needs to be reviewed and rewritten)
The following things must be specified in the code.

- the columns
- 'data' and 'title' on the columns
- primary key

## The Actual CDN

```html
<!-- Normal version -->
<script src="https://cdn.jsdelivr.net/gh/nimbus321/Entablador@latest/Entablador.js"></script>
<!-- Minified version (PROBABLY -NOT- BROKEN) -->
<script src="https://cdn.jsdelivr.net/gh/nimbus321/Entablador@latest/Entablador.min.js"></script>
```

### Bootstrap's CSS

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
```

### Necessary JS

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<link href="https://cdn.datatables.net/v/bs4/jszip-3.10.1/dt-1.13.6/b-2.4.2/b-html5-2.4.2/b-print-2.4.2/date-1.5.1/fh-3.4.0/r-2.5.0/sc-2.2.0/sb-1.6.0/sr-1.3.0/datatables.min.css" rel="stylesheet" />
<script src="https://cdn.datatables.net/v/bs4/jszip-3.10.1/dt-1.13.6/b-2.4.2/b-html5-2.4.2/b-print-2.4.2/date-1.5.1/fh-3.4.0/r-2.5.0/sc-2.2.0/sb-1.6.0/sr-1.3.0/datatables.min.js"></script>
<script src="https://cdn.datatables.net/plug-ins/1.12.1/filtering/type-based/accent-neutralise.js"></script>
```

# Usage

| Primary Methods            | Function                                                                           | Notes                                                                                            |
| :------------------------- | :--------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| `ENTABLADOR.crear(config)` | Creates the table                                                                  | the `config` argument will be explained below                                                    |
| `ENTABLADOR.id(ID)`        | Selects the already created table to make changes to the table (Sub Methods below) | ID can be either the table's ID attribute or the DataTables's object of an already created table |

### `ENTABLADOR.crear(config)`

When using the `ENTABLADOR.crear(config)` you need to pass it a configuration object.

#### Example:

```js
ENTABLADOR.crear({
  id: "TABLE",
  meta: {
    key: "id",
    secondary_key: "nombre",
    inputsTypes: {
      name: "text",
      date: "date",
    },
  },
  columns: [], // DataTables's columns (example below)           <- Optional
  columnDefs: [], // DataTables's columnDefs (example below)     <- Optional
});
```

<details>
  <summary>DataTables's columns example (Click me)</summary>

```js
[
  { data: "id", visible: false },
  { data: "name", title: "Name", class: "editable", defaultContent: "" },
  { data: "date", title: "Date", class: "editable", defaultContent: "" },
];
```

</details>

<details>
  <summary>DataTables's columnDefs example (Click me)</summary>

```js
columnDefs: [
  {
    targets: 1, // Name
    render: function (data, type, row, meta) {
      return data ? data.toUpperCase() : data;
    },
  },
];
```

</details>

#### Configuration's object structure

| Property     | Value                        | Notes                               | Optional |
| :----------- | :--------------------------- | :---------------------------------- | :------: |
| `id`         | The HTML table's ID atribute | Cannot be an already existing table |    No    |
| `meta`       | meta Object                  | Meta object will be explained below |    No    |
| `columns`    | DataTable's columns          |                                     |   Yes    |
| `columnDefs` | DataTable's columnDefs       |                                     |   Yes    |

#### `meta`'s object

```js

  meta: {
    key: "id",                   //    <-  Not Optional
    secondary_key: "nombre",     //    <-  Optional
    inputsTypes: {               //    <-  Optional
      name: "text",
      date: "date",
    },
  },
```

## Sub Methods

To use these ones, you need to either select a table with `ENTABLADOR.id(ID)` or immediately after creating it with `ENTABLADOR.crear(ID)`

#### Examples:

- `ENTABLADOR.crear("TABLE").editable(true)` ("TABLE" being the uncreated table's ID attribute)
- `ENTABLADOR.id("TABLE").editable(true)` ("TABLE" being an already created table using the `.crear()` method)

| Sub Methods                   | Function                  | Notes                                                   |
| :---------------------------- | :------------------------ | :------------------------------------------------------ |
| `.editable(boolean\|none)`    | Makes the table editable  | If no value is specified, will return the current value |
| `.tipoEdicion(inline\|modal)` | Specificies the edit type | If no value is specified, will return the current value |
