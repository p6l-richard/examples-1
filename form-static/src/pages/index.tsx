"use server-entry";

import type { PageProps } from "@parcel/rsc";
import { Form } from "../components/Form";
import "../client";

export default function Index({}: PageProps) {
  return (
    <html>
      <head>
        <title>Form Widget</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          :root {
            --primary-color: #0070f3;
          }
          body {
            margin: 0;
            font-family: system-ui;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
          }
          .form-container {
            width: 100%;
            max-width: 500px;
            padding: 2rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .form-field {
            margin-bottom: 1rem;
          }
          .form-field label {
            display: block;
            margin-bottom: 0.5rem;
          }
          .form-field input {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ddd;
            border-radius: 4px;
          }
          button {
            background: var(--primary-color);
            color: white;
            border: none;
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            cursor: pointer;
          }
          button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>
      </head>
      <body>
        <Form />
      </body>
    </html>
  );
} 