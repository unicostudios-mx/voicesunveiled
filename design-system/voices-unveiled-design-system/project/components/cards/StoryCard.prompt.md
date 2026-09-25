One-line: A browsable student-story card with minimal details, a serif quote, and a donation-linked CTA — focused on agency and resilience.

```jsx
<StoryCard
  name="Arezou" age={27}
  quote="The course gave me hope and strength."
  ctaLabel="Read Her Story"
/>
```

Ivory ground, optional portrait `image`. Keeps personal details minimal for
safety. Always show a `<SafetyNote/>` near a group of these. CTA defaults to
"Read Her Story"; on a donation page use "Sponsor a student like her".
