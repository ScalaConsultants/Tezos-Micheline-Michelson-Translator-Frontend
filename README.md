# Tezos Micheline - Michelson Translator

Micheline syntax example (for Textarea on the left):

```
[
    {
      "prim": "parameter",
      "args": [
        {
          "prim": "int"
        }
      ]
    },
    {
      "prim": "storage",
      "args": [
        {
          "prim": "int"
        }
      ]
    },
    {
      "prim": "code",
      "args": [
        [
          {
            "prim": "CAR"
          },
          {
            "prim": "PUSH",
            "args": [
              {
                "prim": "int"
              },
              {
                "int": "1"
              }
            ]
          },
          {
            "prim": "ADD"
          },
          {
            "prim": "NIL",
            "args": [
              {
                "prim": "operation"
              }
            ]
          },
          {
            "prim": "PAIR"
          }
        ]
      ]
    }
]
```

## Configuration

In the root directory you need to create `.env` file with following content:
```
REACT_APP_API_URL=<BACKEND_API_URL>
REACT_APP_RECAPTCHA_SITE_KEY=<YOUR_RECAPTCHA_SITE_KEY>
```

## Run the project
To run the project please follow next steps:

## Available Scripts
In the project directory, you can run:

### `yarn install`
To install dependencies

### `yarn run dev`
Runs the app in the development mode.<br>

### `yarn run build`
Builds the app for production to the `build` folder.<br>

### `yarn run start`
Start your production build<br>
