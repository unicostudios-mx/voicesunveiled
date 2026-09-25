One-line: A text input (or `as="textarea"`) with the brand's plum border + terracotta focus ring — compose inside `<Field>`.

```jsx
<Field label="Email" hint="We'll never share it.">
  <Input type="email" placeholder="you@example.org" />
</Field>
```

Set `invalid` to show the danger border. Visible labels are required (see
`<Field>`) — never rely on placeholder alone.
