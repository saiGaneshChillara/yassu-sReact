const steps = {
    "accordian": [
        "Think of the solution",
        "Use a state variable of array type that stores the selected indices",
        "if an index is click, check for its existence in the state variable",
        "if it already exists remove it",
        "else remove it from the state variable",
        "set the display of the answers of the indices whose values are present in the selcted",
        "for the remaining answers set display to none"
    ],
    "custom-color-div": [
        "Create a `CustomColorDiv` component to manage the color of a div dynamically.",
        "Use a state variable `color` in `CustomColorDiv` to store the current color value.",
        "Define a `changeColor` function in `CustomColorDiv` to update the `color` state based on user input.",
        "Add a `div` in `CustomColorDiv` with a dynamic `backgroundColor` style set to the value of the `color` state.",
        "Create a separate `InputField` component to handle user input for changing the color.",
        "In `InputField`, use a `handleChange` function to capture the user’s input and pass the value to the `onChangeHandler` prop.",
        "Render the `InputField` component inside `CustomColorDiv`, passing the `color` state as the `value` prop and the `changeColor` function as the `onChangeHandler` prop.",
        "Style the `div` and input field using CSS to enhance the appearance."
    ],
    "scroll-progress-indicator" :[
        "Use a `useState` hook to create a state variable `scrollPercentage` to store the current scroll percentage.",
        "Use another state variable, `data`, to hold the fetched data and `loading` to manage the loading state.",
        "Implement a `fetchData` function that fetches data from a given API URL using `fetch` and stores the response in the `data` state.",
        "Define a `handleScrollEvent` function to calculate the scroll percentage.",
        "In the `handleScrollEvent` function, calculate how much has been scrolled using `document.body.scrollTop` or `document.documentElement.scrollTop`.",
        "Calculate the total scrollable height using `document.documentElement.scrollHeight` minus `document.documentElement.clientHeight`.",
        "Compute the scroll percentage as `(howMuchScrolled / height) * 100` and update the `scrollPercentage` state.",
        "Use the `useEffect` hook to fetch data when the component mounts by calling `fetchData` with the API URL.",
        "In another `useEffect`, attach a `scroll` event listener to the window that triggers `handleScrollEvent`.",
        "Ensure you clean up the `scroll` event listener in the `useEffect` cleanup function.",
        "Render a progress bar with a fixed position at the top of the screen, where the width of the inner bar reflects the `scrollPercentage`.",
        "Render the data list fetched from the API, with some margin to account for the fixed progress bar."
    ],
    "interactive-tabs": [
        "Create a state variable to store the index of the current active tab.",
        "Define a `handleClick` function to update the state variable when a tab is clicked.",
        "Use a `map` method to iterate over the tabs data and render each tab header.",
        "Add a conditional class to highlight the active tab based on the state variable.",
        "Render the content of the currently active tab using the state variable to fetch the correct index.",
        "Pass the tabs data as a prop from the `Tabset` component to the `Tabs` component.",
        "Ensure the tabs data has a structure with `label` and `content` fields."
    ],
    "dynamic-modal": [
        "Create a reusable `Modal` component that accepts props such as `id`, `header`, `body`, `footer`, and `onClose`.",
        "Use a `div` with a class of `modal-container` to wrap the modal content, styled to appear as a modal.",
        "Add a close icon (`&times;`) with an `onClick` handler calling the `onClose` prop to close the modal.",
        "Define `header`, `body`, and `footer` sections in the modal, with default fallback content if these props are not provided.",
        "Create a `ModalTest` component to demonstrate the modal functionality.",
        "In `ModalTest`, use a state variable (`showModalPopup`) to manage the visibility of the modal.",
        "Add a button in `ModalTest` to toggle the `showModalPopup` state when clicked.",
        "Conditionally render the `Modal` component when `showModalPopup` is `true`.",
        "Pass the `onClose` handler to the `Modal` component to close the modal when the close icon is clicked."
    ],
    "random-color-generator": [
        "Create a `RandomColor` component to generate and display random colors.",
        "Use `useState` hook to create `typeOfColor` state for tracking the current color format (default to 'hex').",
        "Use `useState` hook to create `color` state for storing the generated color (default to '#000000').",
        "Define `generateRandomNumber(limit)` function to generate a random number between 0 and `limit`.",
        "Define `generateHexColor` function to generate a random hex color string by picking random characters from `hexArr`.",
        "In `generateHexColor`, loop 6 times to append random hex characters to `#` to form the hex color.",
        "Define `generateRgbColor` function to generate a random RGB color using random values for red, green, and blue.",
        "In `generateRgbColor`, use `generateRandomNumber(256)` to get random values for r, g, b, and combine them in the `rgb(r, g, b)` format.",
        "Use `useEffect` to trigger the color generation whenever `typeOfColor` changes. If `typeOfColor` is 'rgb', call `generateRgbColor`, else call `generateHexColor`.",
        "Render two buttons to switch between generating HEX and RGB colors.",
        "Render a third button that generates a new color based on the current `typeOfColor` value.",
        "Display the generated color as the background of the component, and show the color value and its format (HEX or RGB) on the screen.",
        "Style the layout with a full-screen background, centered text, and color formatting for display."
    ],
    "search-autocomplete": [
        "Create an `AutoSearch` component with `useState` for `users`, `searchParams`, `showDropdown`, and `filteredUsers`.",
        "Define `handleChange` to update `searchParams` with the input query, filter the `users` array based on the query, and set `filteredUsers` and `showDropdown` accordingly.",
        "Create `handleClick` to set the selected suggestion in `searchParams`, hide the dropdown, and clear `filteredUsers`.",
        "Use `useEffect` to fetch user data from an API and store the first names in the `users` state.",
        "Conditionally render the `Suggestions` component when `showDropdown` is `true`, passing `filteredUsers` and `handleClick` as props.",
        "In `Suggestions`, display the filtered results in a list, and trigger `handleClick` when a suggestion is clicked."
    ]
};

export default steps;