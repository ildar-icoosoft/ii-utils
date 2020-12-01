# ii-utils

A collection of useful utility functions

## Installation

Use npm to install the package

```terminal
$ npm install ii-utils --save
```


### Usage

```typescript
import { Observable } from "rxjs";
import { memoize } from "ii-utils";

@memoize()
function someFunction(): Observable {
    ...
}
```
