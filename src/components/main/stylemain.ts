import { css } from 'lit';

export const style = [
  css`
    :host {
      display: flex;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
    }

    h1 {
      width: 100%;
      background-color: #f2f2f2;
      color: black;
      text-align: center;
      padding: 10px;
      margin-top: 20px;
    }

    .list-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .list-item {
      width: 200px;
      padding: 10px;
      margin: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .list-item.highlight {
      margin: auto;
      width: 40%;
      margin-bottom: 2rem;
      background-color: #94a7e2;
      font-weight: bold;
      align-items: center;
      flex-wrap: wrap-reverse;
    }

    .list-item.align-inline {
      display: inline-block;
      align-items: center;
    }

    .green {
      color: green;
    }

    .yellow {
      color: yellow;
    }

    .orange {
      color: orange;
    }

    .red {
      color: red;
    }

    .violet {
      color: violet;
    }
  `,
];
