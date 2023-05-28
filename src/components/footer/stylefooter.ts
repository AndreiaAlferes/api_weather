import { css } from 'lit';

export const style = [
  css`
    .footer {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #f2f2f2;
      color: black;
      text-align: center;
      padding: 10px;
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    p {
      font-family: 'Roboto Mono', monospace;
      font-size: 1, 5rem;
      font-weight: 300;
    }

    .footer img {
      margin: 0px 5px;
      width: 30px;
      height: 30px;
    }
  `,
];
