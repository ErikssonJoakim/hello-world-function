# hello-world-function

A Node.js 20 serverless function that answers with a hello world message carrying its version, and can optionally expose the runtime's environment variables.

## Request

The function accepts an optional JSON body:

| Option     | Type    | Default | Effect                                                  |
| ---------- | ------- | ------- | ------------------------------------------------------- |
| `showEnvs` | boolean | `false` | Adds the runtime environment variables to the response |

```bash
curl -X GET "https://a6c440c7ba18.demo.sls.pu-platform-testing.eu.ovhcloud.tools" \
 -H "accept: application/json" \
 -H "content-type: application/json" \
 -d '{"showEnvs": true}'
```

## Response

`200` with a JSON body:

```json
{
  "message": "Hello, World! (v1.1.1)",
  "envs": { "...": "..." }
}
```

`envs` is present only when `showEnvs` is `true`.

`400` when the body is not valid JSON or `showEnvs` is not a boolean.

> `showEnvs` exposes every environment variable of the runtime, secrets included. Keep it to test platforms.

## Versioning

The version comes from `package.json` and is bumped on every change, following semver.

A pre-commit hook rejects any commit that leaves the version unchanged. `npm install` enables it; on a fresh clone run it once.
