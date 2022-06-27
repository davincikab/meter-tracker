import { FaLightbulb, FaSearch } from 'react-icons/fa';

const WidgetSection = (props) => {
    let { info } = props;

    const handleClick = () => {
      props.updateImageDivStatus();
    }

    return (
        <div className='widget-section'>
        <div className='widget-section_inner'>
          <div className="widget-group" onClick={() => props.onItemClick("energy monitoring")}>
            <div className='widget-item'>
              <img src="/assets/icons/power.png" alt=''/>
              <div className='widget-text'>
                  <b>{info.powerRating} kWh</b>
                  <span className='text-muted'>Generator Status</span>
              </div>
            </div>
            <hr></hr>
            <div className='widget-item'>
              <img src="/assets/icons/activity.png" alt=''/>
              <div className='widget-text'>
                  <b>{info.power} W</b>
                  <b>{info.current} A</b>
              </div>
            </div>
          </div>
            

            <div className='widget-item' onClick={() => props.onItemClick("structural monitoring")}>
              <img src="/assets/icons/right-angle-of-90-degrees.png" alt=''/>
              <div className='widget-text'>
                  <b>{info.tilt}°</b>
              </div>
            </div>

          <div className="widget-group" onClick={() => props.onItemClick("generator monitoring")}>
            <div className='widget-item'>
              <img src="/assets/icons/generator.png" alt=''/>
              <div className='widget-text'>
                  <b>{info.generatorStatus}</b>
                  <span className='text-muted'>Generator Status</span>
              </div>
            </div>
            <hr></hr>
            <div className='widget-item'>
              <img src="/assets/icons/gas.png" alt=''/>
              <div className='widget-text'>
                  <b>{info.fuelLevel}%</b>
                  <span className='text-muted'>Fuel Level</span>
              </div>
            </div>
          </div>

            <div className='widget-item'>
              <img src="/assets/icons/images.png" alt=''/>
              <div className='widget-text'>
                  <b>{info.antennaLocation}</b>
                  <span className='text-muted'>Antenna Location</span>
              </div>
            </div>

            <div className='widget-item' onClick={() => props.onItemClick("temperature monitoring")}>
              <img src="/assets/icons/thermometer.png" alt=''/>
              <div className='widget-text'>
                <b>{info.temperature} °c</b>
              </div>
            </div>

            <div className='widget-item' onClick={() => props.onItemClick("door monitoring")}>
              <img src="/assets/icons/door-handle.png" alt=''/>
              <div className='widget-text'>
                <b>{info.doorStatus}</b>
              </div>
            </div>

            <div className='widget-item' 
              onClick={handleClick} 
            >
              <img src="/assets/icons/cctv.png" alt=''/>
              <div className='widget-text'>
                <b>{info.cctv}</b>
              </div>
            </div>

            <div className='widget-item' onClick={() => props.onItemClick("structural monitoring")}>
              <img src="/assets/icons/wind.png" alt=''/>
              <div className='widget-text'>
                <b>{info.windSpeed}kts</b>
              </div>
            </div>
        </div>
      </div>
    );
}

export default WidgetSection;