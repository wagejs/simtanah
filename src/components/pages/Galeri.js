import React, { Component } from 'react';
import Header2 from './../Header2';
class Galeri extends Component {
  render() {
    return (
        <React.Fragment>
            <Header2/>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <h1 className="display-4">Page Galeri</h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae facere sint expedita repellat vero, aspernatur non ratione doloribus aperiam magni soluta id, animi saepe laborum quasi deleniti dolorem voluptatem dignissimos.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
  }
}

export default Galeri;