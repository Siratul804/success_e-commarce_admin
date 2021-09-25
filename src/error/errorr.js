import React from "react";
import { Alert } from "react-bootstrap";

function errorr() {
  return (
    <div
      className="errorr container text-center "
      style={{ paddingTop: "10%" }}
    >
      <Alert variant="danger" dismissible>
        <Alert.Heading>
          404 Not Found <br /> Oh snap! You got an error!
        </Alert.Heading>
        <p>
          <i>
            Change Your Url & Use The Correct One.
            <br />
            Your search an incorrect url, which does not exits. Please use the
            correct url & go to the correct page. <br />
            <b>Thank You. 😃😃😃</b>
            <br />
          </i>
        </p>
      </Alert>
    </div>
  );
}

export default errorr;
