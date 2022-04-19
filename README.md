# Blitz Frontend Takehome Assessment

This is an exercise that will give you a glimpse of the typical front-end challenges that we tackle at Blitz!

You will be recreating a multiselect dropdown component, packed with several features which will be explained in detail in the acceptance criteria.

At Blitz, we deliver solutions with a future-focused, pixel-perfect mindset. So pay extra attention to the user experiences, and the design details provided below.

## Design Guide:

[Figma file](https://www.figma.com/file/07fRGQwCkh62Vy4HaUbmjd/Take-Home-Test?node-id=1%3A113)

## Acceptance Criteria

- The multiselect in its initial, empty state should display a placeholder text of "Select..."
- You may not implement out-of-the-box libraries for this exercise.
- When the user types a non-empty string in the input box, the component should query the list of matching results from the `useGetColor` hook
  - Ensure that the query is case insensitive.
  - The UI should be performant, and not incur too many promise calls. In other words, think of a way to limit the number of times `useGetColor` is called
  - Implement client-side fuzzy search using [fuzzaldrin-plus](https://github.com/jeancroy/fuzz-aldrin-plus) on the mock database results
  - If a color has been fetched before, it should not be fetched again unless the page is refreshed.
- The user should only be able to select an option once. Filter the data from `useGetColor` with the set of selected options.
- The user should be able to select multiple options.
- The user should be able to clear the selection.
- While in a loading state, a spinner should be displayed. (use the SVG spinner provided in the assets folder)
  - Animate spinner using @keyframes
- The results list should display an empty state for zero results returned from `useGetColor`.
- Clicking on the selected token should remove the option from the selected list.
- The user can only select up to three (3) options. Disable the text input once there are three selected options.
  - Removing the last selected option should enable the text input again.
- Tabbing through the selected options should cycle through the options.

## Extra credit and bonus points

- Fuzzy search highlights the text selection with a yellow background in the results list.
- When the list is in focus:
  - the user can use the up and down arrow keys to navigate through the list.
  - the user can use the enter key to select an option.
  - the user can use the escape key to close the list.
  - the user can use the tab key to cycle through the list.
- Add animations as items are added or removed from the list.
- Sort the results list alphabetically.

## If you really want to go extra-crazy, you can do this:

https://fe-recruiting.blitz.gg/

Completing this algorithm will favor you greatly if you can complete it in addition to the other challenges.

# Development

Clone a copy of this repository, and run the following commands in your CLI to start development

```zsh
$ npm install
$ npm start
```

Open `localhost:3000`, and start developing!

# Questions?

Email our team at: alongbottom@blitz.gg for any questions related to the take home. Good luck!
