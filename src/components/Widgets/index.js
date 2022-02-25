import { FaLightbulb, FaSearch } from 'react-icons/fa';

const WidgetSection = () => {
    return (
        <div className='widget-section'>
        <div className='widget-section_inner'>
          <div className="widget-group">
            <div className='widget-item'>
              <img src="/assets/icons/power.png" alt=''/>
            </div>
            <hr></hr>
            <div className='widget-item'>
              <img src="/assets/icons/activity.png" alt=''/>
            </div>
          </div>
            

            <div className='widget-item'>
              <img src="/assets/icons/right-angle-of-90-degrees.png" alt=''/>
            </div>

          <div className="widget-group">
            <div className='widget-item'>
              <img src="/assets/icons/generator.png" alt=''/>
            </div>
            <hr></hr>
            <div className='widget-item'>
              <img src="/assets/icons/gas.png" alt=''/>
            </div>
          </div>

            <div className='widget-item'>
              <img src="/assets/icons/images.png" alt=''/>
            </div>

            <div className='widget-item'>
              <img src="/assets/icons/thermometer.png" alt=''/>
            </div>

            <div className='widget-item'>
              <img src="/assets/icons/door-handle.png" alt=''/>
            </div>

            <div className='widget-item'>
              <img src="/assets/icons/cctv.png" alt=''/>
            </div>

            <div className='widget-item'>
              <img src="/assets/icons/wind.png" alt=''/>
            </div>
        </div>
      </div>
    );
}

export default WidgetSection;