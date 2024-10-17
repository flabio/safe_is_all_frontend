


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
      </>
    )
  
}
