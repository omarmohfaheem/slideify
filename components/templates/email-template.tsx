import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  message: string;
}

export default function EmailTemplate({
  fullName,
  email,
  message,
}: Readonly<EmailTemplateProps>): React.JSX.Element {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.5,
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1 style={{ color: "#333" }}>Slideify New Contact Form Submission</h1>
        <p style={{ color: "#555" }}>
          You have received a new message from your website contact form on
          Slideify.
        </p>

        <h2 style={{ color: "#333" }}>User Information:</h2>
        <p style={{ color: "#555" }}>
          <strong>Name:</strong> {fullName} <br />
          <strong>Email:</strong> {email}
        </p>

        <h2 style={{ color: "#333" }}>Message:</h2>
        <p
          style={{
            color: "#555",
            borderLeft: "4px solid #007BFF",
            paddingLeft: "10px",
            margin: "10px 0",
          }}
        >
          {message}
        </p>
      </div>
    </div>
  );
}
