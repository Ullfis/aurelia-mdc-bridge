## Contributing

The following steps will allow you to contribute to our project:

1. Fork the project
2. Run `npm install` in the root directory
3. Make any changes
4. Run `npm start` and browse to `http://localhost:9000` to check that your changes didn't break anything.
    > the project will enter `watch mode` and you can change stuff and see changes immediately.
5. Run `npm run lint` (and fix any errors)
6. Create a git commit using our ***commit message guidelines*** so your change can be automatically added to the changelog.
    > **Note**: Don't include any dist/docs output (from running `npm run build` or `npm run release`).
7. Create a pull request

## Commit message guidelines

### Structure of the commit message:

```text
<type>(optional scope): <description>

optional body

optional footer
```

### **Type**

- **fix**: The commit represents a bug fix for the bridge components (`patch` version bump)
- **feat**: The commit represents a new feature for the bridge components (`minor` version bump)
- **doc**: The comit represents a change in the documentation. Mostly in `src` folder but **not** `src/bridge`
- **chore**: Other changes

The type **fix** and **feat** will be added to changelog and version will be bumped. 

> Please note that using `BREAKING CHANGE:` will bump the `major` version. 
>
> We try to follow the major version number of `material-components-web` and don't want to bump this.
> Make a note so we can mark breaking changes in release notes.

### **Optional scope**

- `fix` and `feat` use the name of component. Example: `fix(mdc-list-item): <description>`
- `doc`: try to use name of page/element. Example: `doc(buttons): <description>`
- `chore`: readme, build scripts, dependencies, ..

### **Description**

The description contains succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize first letter
- no dot (.) at the end

### **Optional body**

Just as in the subject, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior. This can also reference issues.

### **Optional footer**

All breaking changes have to be mentioned in the footer. You can also reference issues.

## Examples

```text
feat(mdc-button): add secondary color to surface

control this by setting attribute secondary="true"

close #149
```

```text
chore: add contributing guidelines
```
