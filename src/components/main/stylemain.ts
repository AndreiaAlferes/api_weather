import { css } from 'lit';

export const style = [
  css`
    :host {
      display: block;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      text-align: center;
    }

    h1 {
      margin-top: 20px;
    }

    .list-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    .list-item {
      width: 100%;
      padding: 10px;
      margin: 10px;
      background-color: #f2f2f2;
    }
  `,
];
