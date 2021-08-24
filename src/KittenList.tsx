import React from 'react';
import {
  Card,
  CardTitle,
  CardImage,
  CardContent
} from '@customink/pigment-react';

import './styles/KittenList.scss';

const KittenList = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <Card>
          <CardImage>
            <img
              className="card-image"
              src="http://placekitten.com/200/140"
              alt="cat."
            />
          </CardImage>
          <CardTitle>Alfonso</CardTitle>
          <CardContent>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vitae nulla eget est cursus sodales.
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="card">
        <Card>
          <CardImage>
            <img
              className="card-image"
              src="http://placekitten.com/200/141"
              alt="cat."
            />
          </CardImage>
          <CardTitle>Elouise</CardTitle>
          <CardContent>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vitae nulla eget est cursus sodales.
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="card">
        <Card>
          <CardImage>
            <img
              className="card-image"
              src="http://placekitten.com/200/142"
              alt="cat."
            />
          </CardImage>
          <CardTitle>Bernard</CardTitle>
          <CardContent>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vitae nulla eget est cursus sodales.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default KittenList;
