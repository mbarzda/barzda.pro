import { render } from 'solid-js/web';
import { createGlobalStyles, css } from 'solid-styled-components';
import { Contacts, Description } from './components';

const Styles = createGlobalStyles`
  :root {
    --bp-background-color: rgba(148, 210, 189, 0.2);
    --bp-heading-color: #001219;
    --bp-text-color: var(--bp-heading-color);
    --bp-link-color: #005f73;

    background-color: var(--bp-background-color);
    font-size: 14px;
  }

  html,
  body {
    height: 100%;
    font-family: monospace;
  }

  body {
    margin:0;
    padding: 0 16px;
  }

  a {
    color: var(--bp-link-color);
    text-decoration: underline dashed;
  }

  .heading {
    color: var(--bp-heading-color);
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;

render(
  () => (
    <>
      <Styles />
      <main
        class={css`
          margin-left: auto;
          margin-right: auto;
          max-width: 640px;
          background-color: var(--color-primary);
        `}
      >
        <h1 class="heading">▷ Martynas Barzda ◁</h1>
        <h2 class="heading">▷ Front-end Web Engineer ◁</h2>
        <Description />
        <Contacts />
      </main>
    </>
  ),
  document.body,
);
