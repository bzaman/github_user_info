import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root {
  --gray-light: #C7C7C7;
  --primary: #ABC5C6;
  --secondary: #6c757d;
  --dark: #343a40;
}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    ${'' /* font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; */}
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    color: #212529;
    background-color: whitesmoke;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  [tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw);
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 2.5rem;
    }
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw);
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw);
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw);
  }

  @media (min-width: 1200px) {
    h4 {
      font-size: 1.5rem;
    }
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: .5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 0.875em;
  }

  mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  sub,
  sup {
    position: relative;
    font-size: 0.75em;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  a {
    color: #0d6efd;
    text-decoration: underline;
  }

  a:hover {
    color: #024dbc;
  }

  a:not([href]):not([class]), 
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 1em;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
    -ms-overflow-style: scrollbar;
  }

  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }

  code {
    font-size: 0.875em;
    color: #d63384;
    word-wrap: break-word;
  }

  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }

  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [role="button"] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type="button"]:not(:disabled),
  [type="reset"]:not(:disabled),
  [type="submit"]:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
    white-space: normal;
  }

  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem;
    }
  }

  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type="search"] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }

  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
  }

  .loader {
    border: 3px solid white; 
    border-top: 3px solid #FF9800; 
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
 
export default GlobalStyle;