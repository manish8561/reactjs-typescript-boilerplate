import { Button, Container } from "react-bootstrap";
import { useAppDispatch } from "../../app/hooks";
import { showHideLoader } from "../../app/features/loader/loaderSlice";

const Contact = () => {
  const dispatch = useAppDispatch();
  return (
    <Container>
      <h1>Contact Me</h1>
      <Button
        className="btn-warning"
        onClick={() => dispatch(showHideLoader())}
      >
        Loader
      </Button>
    </Container>
  );
};

export default Contact;
