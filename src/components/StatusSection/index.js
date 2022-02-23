
const StatusSection = (props) => {
    return(
        <div className='status-section'>
        <div className='section-title'>Status Indicator</div>

        <div className='status-section__inner'>
            <div className='status-item'>
              <div className='status-item-title'>Total sites in district</div>
              <div className='text-count'>
                <h5>40</h5>
              </div>
            </div>

            <div className='status-item'>
              <div className='status-item-title'>Detected Activity</div>
              <div className='text-count'>
                <h5>40</h5>
              </div>
            </div>

            <div className='status-item'>
              <div className='status-item-title'>Detected Illegal Connection</div>
              <div className='text-count'>
                <h5>30</h5>
              </div>
            </div>

            <div className='status-item'>
              <div className='status-item-title'>Detected Energy Illegularity</div>
              <div className='text-count'>
                <h5>60</h5>
              </div>
            </div>

            <div className='status-item'>
              <div className='status-item-title'>Detected Structural Activity</div>
              <div className='text-count'>
                <h5>70</h5>
              </div>
            </div>

        </div>
      </div>
    )
}


export default StatusSection;