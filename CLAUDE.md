# CLAUDE.md

## Versioning

- Every change to the function bumps `version` in `package.json`, following semver: patch for fixes, minor for new behaviour or options, major for breaking changes to the request or response.
- The hello world message shows that version, so a deployed function tells which build is running.
- Keep the example response in `README.md` in sync with the current version.
