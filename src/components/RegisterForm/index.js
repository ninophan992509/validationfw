import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RegisterForm() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
        <div class="wrapper wrapper--w680">
          <Card className="card card-4">
            <Card.Body className="card-body">
              <Card.Title className="title">Đăng ký</Card.Title>
              <Form method="POST">
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Họ tên</label>
                      <input
                        class="input--style-4"
                        type="text"
                        name="first_name"
                      />
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Email</label>
                      <input class="input--style-4" type="email" name="email" />
                    </div>
                  </div>
                </div>
                <div class="row row-space">
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Birthday</label>
                      <div class="input-group-icon">
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />
                        <i class="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
                      </div>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="input-group">
                      <label class="label">Phone Number</label>
                      <input class="input--style-4" type="text" name="phone" />
                    </div>
                  </div>
                </div>
                <div class="p-t-15">
                  <Button
                    variant="primary"
                    className="btn btn--radius-2 btn--blue"
                    type="submit"
                  >
                    Đăng ký
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
