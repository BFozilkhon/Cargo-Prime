import React from "react";
import { Container } from "./style";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export const Result = () => {
  return (
    <>
      <Container>
        <Container.Card>
          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <Container.Title>
                {isVisible ? (
                  <CountUp end={300} duration={1} start={0} />
                ) : null}
                +
              </Container.Title>
            )}
          </VisibilitySensor>

          <Container.Truck />
          <Container.Item>Tucks on the road</Container.Item>
        </Container.Card>
        <Container.Card>
          <Container.Title>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Container.Title>
                  {isVisible ? (
                    <CountUp end={15} duration={1} start={0} />
                  ) : null}
                  +
                </Container.Title>
              )}
            </VisibilitySensor>
          </Container.Title>
          <Container.Star />
          <Container.Item>Years on market</Container.Item>
        </Container.Card>
        <Container.Card>
          <Container.Title>
            <VisibilitySensor partialVisibility>
              {({ isVisible }) => (
                <Container.Title>
                  {isVisible ? (
                    <CountUp end={400} duration={1} start={0} />
                  ) : null}
                  +
                </Container.Title>
              )}
            </VisibilitySensor>
          </Container.Title>
          <Container.Employe />
          <Container.Item>Emlpoyes</Container.Item>
        </Container.Card>
      </Container>
    </>
  );
};

export default Result;
