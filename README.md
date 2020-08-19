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

## Important
Because of ReCaptcha requirements, please remember that you need to open the app as http://localhost:3000,
not http://127.0.0.1:3000, because siteKey has to be related to the domain, not to IP address.

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

Developed by [Scalac](https://scalac.io/?utm_source=scalac_github&utm_campaign=scalac1&utm_medium=web)
