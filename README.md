# lab-node-lifecycle

**Lab implementing lifecycle management of services in Node with inversify.**

## Setup
```
npm init -y
npm install express inversify reflect-metadata
npm install -D typescript @types/express @types/uuid ts-node-dev
npx tsc --init
```

### Minimal tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es6"],
    "types": ["reflect-metadata"],
    "module": "commonjs",
    "moduleResolution": "node",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```
