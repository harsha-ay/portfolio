import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, liveDemoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {liveDemoUrl && (
            <a 
            href={liveDemoUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-custom"
            style={{
              backgroundColor: "#6c63ff", // Custom button background color
              color: "#fff", // Button text color
              borderRadius: "20px", // Slightly rounded corners
              padding: "5px 10px", // Smaller padding for a smaller button
              textAlign: "center", // Center-align the text
              textDecoration: "none", // No underline
              fontSize: "14px", // Decrease font size for a smaller look
              display: "inline-block", // Ensure proper alignment
              margin: "10px auto", // Center the button horizontally and add spacing
            }}
          >
            Live Demo
          </a>
          
          )}
        </div>
      </div>
    </Col>
  );
};
