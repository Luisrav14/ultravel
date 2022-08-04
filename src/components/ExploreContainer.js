import "../assets/css/ExploreContainer.css";

const ExploreContainer = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <p>
        Explore
        <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;