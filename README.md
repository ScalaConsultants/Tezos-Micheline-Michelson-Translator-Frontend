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

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
