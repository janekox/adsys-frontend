import React from 'react';
import { Row, Col } from 'react-bootstrap';

function AboutPage() {
    return (
        <Row>
            <Col xs={5}>
                <h1 className="pb-5">About adverter</h1>

                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id ipsum eu magna commodo volutpat laoreet
                    vel ex. Sed sit amet porttitor arcu. Fusce tempus eros et nisl ullamcorper, in congue eros placerat.
                    Quisque in risus porttitor, gravida lorem et, suscipit nunc. Sed in libero leo. Nunc lobortis
                    pellentesque luctus. Vestibulum nunc elit, ornare vitae maximus vel, viverra et diam. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Proin consequat velit et elit maximus, at cursus augue
                    sollicitudin. Phasellus mattis faucibus dolor et molestie. Duis laoreet euismod quam non interdum. Donec
                    ullamcorper neque quis erat sodales, eget viverra eros sollicitudin.</p>

                <p className="text-justify">Aliquam aliquet odio non dui consequat interdum. Interdum et malesuada fames ac ante ipsum primis in
                    faucibus. Ut scelerisque cursus egestas. Aenean dapibus risus ut egestas bibendum. Nulla ac massa eu
                    augue ultrices pulvinar ut in magna. Mauris ut lacinia nisl. Curabitur a odio eu magna malesuada
                    aliquet. Aliquam sapien nunc, ultrices ut elementum eget, cursus in purus. Sed rutrum nibh neque, vel
                    eleifend arcu ultrices vel. Cras molestie dignissim nibh, sed eleifend felis ultricies vel.</p>
            </Col>
        </Row>
    );
}

export default AboutPage;


