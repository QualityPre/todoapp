import Button from "./Button";

const Header = ({ title }) => {
  const onClickHandler = () => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClickHandler} color="green" text="Add" />
    </header>
  );
};

export default Header;
