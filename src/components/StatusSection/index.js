
const StatusSection = (props) => {
    return(
        <div className='status-section'>
        {/* <div className='section-title'>Status Indicator</div> */}

        <div className='status-section__inner'>
            <div className='status-item'>
              <div>
                <div className='status-item-title'>Total <br></br>sites</div>
                <div className='text-count'>
                  <h5>40</h5>
                </div>
              </div>
              
              <div class="seperator"></div>
            </div>

            <div className='status-item'>
              <div>
                <div className='status-item-title'>Detected Activity</div>
                <div className='text-count'>
                  <h5>40</h5>
                </div>
              </div>
             
              <div class="seperator"></div>
            </div>

            <div className='status-item'>
              <div>
                <div className='status-item-title'>Illegal Connection</div>
                <div className='text-count'>
                  <h5>30</h5>
                </div>
              </div>
            
              <div class="seperator"></div>
            </div>

            <div className='status-item'>
              <div>
                <div className='status-item-title'>Energy Illegularity</div>
                <div className='text-count'>
                  <h5>60</h5>
                </div>
              </div>

              <div class="seperator"></div>
            </div>

            <div className='status-item'>
              <div className='status-item-title'>Structural Activity</div>
              <div className='text-count'>
                <h5>70</h5>
              </div>
            </div>

        </div>
      </div>
    )
}


export default StatusSection;