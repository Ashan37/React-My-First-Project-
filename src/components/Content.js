import React from "react";
import './content.css';

export default function Content() {
  return (
    <div className="content">
      <div className="content1">
        <p className="p1">
          React is a widely-used open-source JavaScript library developed by
          Facebook for building user interfaces, especially single-page
          applications where data changes frequently. Released in 2013, React
          has quickly gained popularity due to its simplicity, flexibility, and
          performance. The core concept of React revolves around components,
          which are reusable and self-contained pieces of code that define the
          structure and behavior of parts of the user interface. Components can
          be nested and combined to create complex UIs, promoting reusability
          and maintainability.
        </p>
        <p className="p2">
          One of React's standout features is its use of the Virtual DOM, a
          lightweight representation of the actual DOM that enables efficient
          updates. When the state of a component changes, React updates the
          Virtual DOM and compares it to the previous state, making only the
          necessary changes to the real DOM. This approach significantly boosts
          performance, especially in applications where the UI updates
          frequently. React also introduces JSX, a syntax extension that allows
          developers to write HTML-like code within JavaScript, making the code
          more readable and easier to write.
        </p>
        <p className="p3">
          React supports both class-based components, which use lifecycle
          methods for managing state and effects, and functional components,
          which, with the introduction of hooks, have become the preferred
          method for building components. Hooks such as useState and useEffect
          allow functional components to manage state and side effects, making
          the code more concise and easier to understand. React’s declarative
          approach simplifies UI development by letting developers define how
          the UI should look based on the state, and React handles the updates
          efficiently. With its strong community, vast ecosystem of tools and
          libraries, and capabilities for server-side rendering to improve SEO,
          React remains a leading choice for building modern, dynamic, and
          scalable web applications.
        </p>
      </div>
    </div>
  );
}
