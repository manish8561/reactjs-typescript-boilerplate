import React from "react";

import { decrement, increment } from "./counterSlice";
import { Button, Container } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../hooks";

export function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // omit rendering logic

  return (
    <Container>
      <div className="row">
        <div className="col-4">
            <span className="text-danger">
            Counter:&nbsp;{count}
            </span>
        </div>
        <div className="col-4">
          <Button
            className="btn btn-info btn-sm"
            onClick={() => dispatch(increment())}
          >
            +
          </Button>
        </div>
        <div className="col-4">
          <Button
            className="btn btn-info btn-sm"
            onClick={() => dispatch(decrement())}
          >
            -
          </Button>
        </div>
      </div>
    </Container>
  );
}
