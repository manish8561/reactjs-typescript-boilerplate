import { Button, Container, Form } from "react-bootstrap";
import { useAppDispatch } from "../../app/hooks";
import { showHideLoader } from "../../app/features/loader/loaderSlice";
import { useMemo, useState } from "react";

const ExpensiveComponent: React.FC<any> = ({ list }) => {
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return list.reduce((acc: any, val: number) => acc + val, 0);
  }, [list]);


  return <span className="text-info">Sum: {sum}</span>;
};

const Contact: React.FC = () => {
  const dispatch = useAppDispatch();
  const [list, setList]: any = useState([1, 2, 3, 4, 5]);

  const changeList = (val: number) => {
    setList((list: any) => [...list, val]);
  };
  return (
    <Container>
      <h1>Contact Me</h1>
      <div className="row">
        <div className="col">
          <Button
            className="btn-warning"
            onClick={() => dispatch(showHideLoader())}
          >
            Loader
          </Button>
        </div>

        <div className="col">
          <ExpensiveComponent list={list} />
          <Form.Control
            type="number"
            placeholder="add number...."
            onChange={(e) => changeList(Number(e.target.value))}
          />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
