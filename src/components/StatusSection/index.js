
const StatusSection = (props) => {
    const {data, sites } = props;
    return(
        <div className='status-section'>
        {/* <div className='section-title'>Status Indicator</div> */}

        <div className='status-section__inner'>
            <div className='status-item'>
              <div>
                <div className='status-item-title'>Total <br></br>sites</div>
                <div className='text-count'>
                  <h5>{sites}</h5>
                </div>
              </div>
              
              <div className="seperator"></div>
            </div>

            <div className='status-item' onClick={() => props.onItemClick("detected activity")}>
              <div>
                <div className='status-item-title'>Detected Activity</div>
                <div className='text-count'>
                  <h5>{data['detected activity'].length}</h5>
                </div>
              </div>
             
              <div className="seperator"></div>
            </div>

            <div className='status-item' onClick={() => props.onItemClick("illegal installation")}>
              <div>
                <div className='status-item-title'>Illegal Installation</div>
                <div className='text-count'>
                  <h5>{data["illegal installation"].length}</h5>
                </div>
              </div>
            
              <div className="seperator"></div>
            </div>

            <div className='status-item' onClick={() => props.onItemClick("abnormal energy")}>
              <div>
                <div className='status-item-title'>ABNORMAL ENERGY</div>
                <div className='text-count'>
                  <h5>{data["abnormal energy"].length}</h5>
                </div>
              </div>

              <div className="seperator"></div>
            </div>

            <div className='status-item' onClick={() => props.onItemClick("structural activity")}>
              <div className='status-item-title'>Structural Activity</div>
              <div className='text-count'>
                <h5>{data["structural activity"].length}</h5>
              </div>
            </div>

        </div>
      </div>
    )
}


export default StatusSection;