# Radix-colors🎨 To JSON📜 Exporter

## 🎁 What's this?

An application that outputs the radix-colors color set as a JSON file in the following format.

```JSON
{
  "color-name": {
    "light": {
      "1": "value",
      // ~~~
      "12": "value",
      "a": {
        "1": "value",
        // ~~~
        "12": "value"
      },
      "p3": {
        "1": "value",
        // ~~~
        "12": "value",
        "a": {
          "1": "value",
          // ~~~
          "12": "value"
        }
      }
    },
    "dark": {
      "1": "value",
      // ~~~
      "12": "value",
      "a": {
        "1": "value",
        // ~~~
        "12": "value"
      },
      "p3": {
        "1": "value",
        // ~~~
        "12": "value",
        "a": {
          "1": "value",
          // ~~~
          "12": "value"
        }
      }
    }
  }
}

```

## ⌨️ How to use?

1. Clone this repo

```sh
git clone https://github.com/koutyuke/radix-color-json-exporter.git
```

2. Install library with 🍞bun

```sh
bun install
```

3. Execute program

```sh
bun run ./src/index.ts
```

## 🛠️ Export options

The contents of the output file can be changed by changing the arguments of the main function.

```ts
// Example
main({
  useColors: ["blue"],
  useAlpha: false,
  useP3: false,
});
```

### 🎨 useColors

You can choose the colors you want to use.

default: ALL COLORS

type: Array

### 🎨 useAlpha

Option to use Alpha color or not.

default: true

type boolean

### 🎨 useP3

Option to use P3 color or not.

default: true

type boolean
