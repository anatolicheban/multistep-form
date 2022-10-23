import React from "react";

type FormWrapperProps = {
  title: string;
  children: React.ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          margin: "0 0 2rem 0",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
