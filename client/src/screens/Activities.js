// Imported React library and hooks.
import React from "react";
// Imported components from React Bootstrap.
import { Row, Card, Image } from "react-bootstrap";

/**
 * Created an activities page for the application.
 * Utilized Bootstrap to create cards and thumbnail, fluid images with their respective headers.
 * @returns A page with cards that display a header with the activity and their own respective images..
 */

const Activities = () => {
  return (
    <div id="activitycontainer">
      <h3 id="activitymainheader">Bucket List Activities</h3>
      <div>
        <Row>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Get Salty</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/HVyMvWT/Beach.jpg"
                alt="Beach"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Snorkler's Dream</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/8YyFSzD/dan-gold-1-Xk-HWek-ZE-M-unsplash.jpg"
                alt="Snorkling"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Diving Paradise</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/cxB6Lyj/sebastian-pena-lambarri-7i5-HMCGup-Vw-unsplash.jpg"
                alt="Diving"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Surf's Up</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/CVf0NR0/tim-marshall-h-IHh4-E4-OGA-unsplash.jpg"
                alt="Surfing"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Hit the Pool</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/z4sZnqB/alexander-kaunas-G6e-XUCi8-Jg-A-unsplash.jpg"
                alt="Pool"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Fishing Charter</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/ckthtFq/antonio-scant-a-FFXBx3-Iu4o-unsplash.jpg"
                alt="Fishing Charter"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Let the DJ set the Groove</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/9WrL2z3/muhammadh-saamy-GO1i2timuug-unsplash.jpg"
                alt="DJ"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Wine and Dine</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/PWpzdJy/gabriella-clare-marino-q-Jvz-Xv-LFx9k-unsplash.jpg"
                alt="Wine and Dine"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Head to the Market</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/KxGJHsV/Market.jpg"
                alt="Market"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Beach Horse Riding</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/Z20jCLr/Horseriding.jpg"
                alt="Beach Horse Riding"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Village Tours</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/DKPcd3x/Villagetours.jpg"
                alt="Village Tours"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
          <Card className="activitycard">
            <Card.Title>
              <h5 className="activityheader">Beach Massage Treat</h5>
            </Card.Title>
            <Card.Body>
              <Image
                src="https://i.ibb.co/r7Mkt3Q/Massage.jpg"
                alt="Beach Massage"
                className="activityimage"
                thumbnail
                fluid
              />
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};

// Exporting Activities.js to App.js.
export default Activities;
