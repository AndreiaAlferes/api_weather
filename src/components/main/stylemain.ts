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

    .index p {
      font-size: 1.5rem;
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
      background-color: #d9deed;
      font-weight: bold;
      align-items: center;
      flex-wrap: wrap-reverse;
    }

    .list-item.align-inline {
      display: inline-block;
      align-items: center;
    }

    .low-uv {
      color: #59d61a;
    }

    .moderate-uv {
      color: rgb(207 185 30);
    }

    .high-uv {
      color: #ef8031;
    }

    .very-high-uv {
      color: #f6420b;
    }

    .extreme-uv {
      color: #70088a;
    }
  `,
];
