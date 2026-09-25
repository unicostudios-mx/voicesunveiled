One-line: A form field wrapper that supplies a visible label (always required for accessibility), an optional hint, and an error message, and links them to the input.

```jsx
<Field label="Full name" required>
  <Input placeholder="Your name" />
</Field>
<Field label="Message" error="Please tell us a little more">
  <Input as="textarea" />
</Field>
```

Auto-generates an id and passes `id` + `invalid` to its single child. Use
descriptive labels and clear error text per the accessibility checklist.
