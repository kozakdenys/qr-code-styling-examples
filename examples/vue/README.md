# vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Potential Issues when running
When running the above commands you may be presented with the following error `error:0308010C:digital envelope routines::unsupported` to work around this you can enable the legacy SSL provider:

On *nix Operating systems:
```
export NODE_OPTIONS=--openssl-legacy-provider
```

On windows:
```
set NODE_OPTIONS=--openssl-legacy-provider
```

PowerShell:
```
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```
