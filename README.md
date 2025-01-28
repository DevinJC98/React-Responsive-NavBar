Start Instructions:

To start application open the foler in the terminal and use the command "npm run dev", then go to the localhost url provided.

To test the hamburger menu functionality, resize the window to a width equal to or below 768px.

---

Dependencies:

Node.js
vite @ version 6.0.5
React @ version 18.3.1
React-Router-Dom @ version 18.3.1

---

Specific Libraries and patterns:

-No css libraries or frameworks were used
-React library was used

-Everything related to the hamburger menu contains the word burger

-The entire header is within the NavBar.jsx component

---

UX & Design Considerations:

-The visual design in this assignment is secondary as I was more concerned with creating a functional nav bar than creating a good looking nav bar.

-Sharp contrast between background color of navbar and other elements for visibility.

-Hamburger menu components should only show up on screens below 768px, otherwise the nav links would all fit nicely into the header.

-Links in the nav Bar increase in scale on hover to indicate that they are interactive.

-Hamburger menu button rotates 90deg on click to provide feedback to user. I am aware this looks stupid but it gets the point across that the menu is active.

-On window resize above the 768px breakpoint the hamburger menu elements are automatically hidden.

-All react components within the pages folder contain minimal "dummy" content as they are intended soley to indicate a change in routing.

-Bean's Roasterie logo and the hamburger menu button are both stored in the images folder as svgs created in adobe illustrator.

-Bean's logo does not function as a link to the homepage because there is already a link to the homepage included on the navbar.

-There are two media queries used on the navbar. The first is for screens below 1025px wide which increases the padding on the header, and reduces the font size of the links. This is purely for aesthetics. The second breakpoint is for screens below 769px wide. This breakpoint specifies when the header is too small to keep the links in the same format, instead opting to use a hamburger menu.

---

Inspirations:

none, this whole assignment was a shot in the dark. I was busy learning react so I kept the design as simple as possible to save me the headache.
