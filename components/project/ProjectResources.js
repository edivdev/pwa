import { background } from "@chakra-ui/react";

export default function ProjectResources(props) {
  const { document } = props;
  console.log("@@document", document, document.attributes.url);
  return (
    <div
      style={{
        height: "100%",
        width: "65px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={document.attributes.url}
      >
        <div style={{ width: "50px", marginBottom: "10px", margin: "auto" }}>
          <img src="/images/static/assets/image22.png" alt="pdf-icon" />
        </div>
        <div
          style={{
            fontSize: "11px",
            lineHeight: "1em",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "65px" }}>{document.attributes.name}</div>
        </div>
      </a>
    </div>
  );
}
