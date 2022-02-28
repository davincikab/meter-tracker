import { FaLightbulb, FaSearch } from 'react-icons/fa';

const WidgetSection = (props) => {
    return (
        <div className='widget-section'>
        <div className='widget-section_inner'>
          <div className="widget-group" onClick={() => props.onItemClick("energy monitoring")}>
            <div className='widget-item'>
              <img src="/assets/icons/power.png" alt=''/>
              <div className='widget-text'>
                  <b>1,821 kWh</b>
                  <span className='text-muted'>Generator Status</span>
              </div>
            </div>
            <hr></hr>
            <div className='widget-item'>
              <img src="/assets/icons/activity.png" alt=''/>
              <div className='widget-text'>
                  <b>500 W</b>
                  <b>36 A</b>
              </div>
            </div>
          </div>
            

            <div className='widget-item' onClick={() => props.onItemClick("structural monitoring")}>
              <img src="/assets/icons/right-angle-of-90-degrees.png" alt=''/>
              <div className='widget-text'>
                  <b>0°</b>
              </div>
            </div>

          <div className="widget-group" onClick={() => props.onItemClick("generator monitoring")}>
            <div className='widget-item'>
              <img src="/assets/icons/generator.png" alt=''/>
              <div className='widget-text'>
                  <b>Off</b>
                  <span className='text-muted'>Generator Status</span>
              </div>
            </div>
            <hr></hr>
            <div className='widget-item'>
              <img src="/assets/icons/gas.png" alt=''/>
              <div className='widget-text'>
                  <b>80%</b>
                  <span className='text-muted'>Fuel Level</span>
              </div>
            </div>
          </div>

            <div className='widget-item'>
              <img src="/assets/icons/images.png" alt=''/>
              <div className='widget-text'>
                  <b>Normal</b>
                  <span className='text-muted'>Antenna Location</span>
              </div>
            </div>

            <div className='widget-item' onClick={() => props.onItemClick("temperature monitoring")}>
              <img src="/assets/icons/thermometer.png" alt=''/>
              <div className='widget-text'>
                <b>36 °c</b>
              </div>
            </div>

            <div className='widget-item' onClick={() => props.onItemClick("door monitoring")}>
              <img src="/assets/icons/door-handle.png" alt=''/>
              <div className='widget-text'>
                Close - Lock
              </div>
            </div>

            <div className='widget-item'>
              <img src="/assets/icons/cctv.png" alt=''/>
              <div className='widget-text'>
                <b>Normal</b>
              </div>
            </div>

            <div className='widget-item' onClick={() => props.onItemClick("structural monitoring")}>
              <img src="/assets/icons/wind.png" alt=''/>
              <div className='widget-text'>
                <b>9kts</b>
              </div>
            </div>
        </div>
      </div>
    );
}

export default WidgetSection;