import ProgressBar from "react-bootstrap/ProgressBar";
import "../Styles/time.scss";

const Time = () => {
  return (
    <>
      <div>
        <p>Timing</p>
        <ProgressBar>
          <ProgressBar
            className="first"
            striped
            variant="success"
            animated
            now={33}
            key={1}
          />
          <ProgressBar
            className="second"
            variant="warning"
            animated
            now={33}
            key={2}
          />
          <ProgressBar
            className="third"
            striped
            variant="danger"
            animated
            now={33}
            key={3}
          />
        </ProgressBar>
      </div>
    </>
  );
};

export default Time;
