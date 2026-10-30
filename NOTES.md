
# Accessibility Components - Source Code Review

## 1. Modal Dialog

### My Implementation
- I manually implemented focus management using React useRef and useEffect.
- I handled Escape key events.
- I implemented Tab and Shift+Tab focus trapping.
- I restored focus to the previously focused element when the modal closed.

### What shadcn Handled Better
- shadcn uses the Base UI Dialog primitive for built-in focus management.
- It handles focus trapping, Escape dismissal and focus restoration.
- It provides Portal, Backdrop, Popup, Title, Description and Close components.
- Its modal behavior also manages background interaction and page scrolling.

## 2. Tabs

### My Implementation
- I used React useState to manage the active tab.
- I manually implemented Arrow Left and Arrow Right navigation.
- I added Home and End keyboard support.
- I manually managed tab roles and ARIA attributes.

### What shadcn Handled Better
- shadcn delegates tab behavior to the Base UI Tabs primitive.
- It provides built-in keyboard focus management.
- It supports horizontal and vertical tab orientation.
- It provides configurable focus looping and activation behavior.

## 3. Disclosure

### My Implementation
- I used a native HTML button.
- I implemented aria-expanded and aria-controls.
- I used the hidden attribute to control content visibility.
- Native button behavior supports Enter and Space keyboard interaction.

### What I Learned
- Native HTML elements provide useful accessibility behavior.
- ARIA attributes communicate component states to assistive technologies.

## 4. Key Learnings

- Accessibility is more than adding ARIA attributes.
- Focus management is important for modal dialogs.
- Keyboard navigation must follow established accessibility patterns.
- Reusable accessible primitives reduce the amount of low-level behavior developers need to maintain.
- Reading component source code helps me understand what a UI library handles internally.

## 5. Resources

- W3C ARIA Authoring Practices Guide:
  https://www.w3.org/WAI/ARIA/apg/

- Base UI Dialog:
  https://base-ui.com/react/components/dialog

- Base UI Tabs:
  https://base-ui.com/react/components/tabs

- shadcn/ui:
  https://ui.shadcn.com/docs
