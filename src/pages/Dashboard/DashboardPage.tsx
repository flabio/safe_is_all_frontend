


export const DashboardPage =() =>{
  
    return (
      <>

        <div className="row">
              <div className="col-lg-4 col-6">
                <div className="small-box bg-primary">
                  <div className="inner">
                    <h3>150</h3>

                    <p>Students</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="small-box bg-success">
                  <div className="inner">
                    <h3>53<sup >%</sup></h3>

                    <p>Instrutor</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>

              <div className="col-lg-4 col-6">
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>65</h3>

                    <p>Unique Visitors</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph"></i>
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                </div>
              </div>

            </div>
            <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799181496!2d-74.25987571760744!3d40.69767006358627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b60165%3A0x8b621f8a7a7d28a4!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633452834502!5m2!1sen!2s"
          style={{ flex: 1, border: 0 }}
          allowFullScreen
          loading="lazy"
          width="100%"
          height={400}
        />
      </>
    )
  
}
