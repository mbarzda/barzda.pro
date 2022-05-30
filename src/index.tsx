import { render } from 'solid-js/web';
import { createGlobalStyles, css } from 'solid-styled-components';
import { Contacts, Description, Heading, SubHeading } from './components';

const Styles = createGlobalStyles`
  :root {
    background-color: rgba(148, 210, 189, 0.2);
    font-size: 14px;
  }

  html,
  body {
    height: 100%;
    font-family: monospace;
  }

  body {
    margin:0;
    padding: 0;
  }

  a {
    color: #005f73;
    text-decoration: underline dashed;
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
        <Heading>▷ Martynas Barzda ◁</Heading>
        <SubHeading>▷ Front-end Web Engineer ◁</SubHeading>
        <Description />
        <Contacts />
      </main>
    </>
  ),
  document.body
);
