import { useState } from "react";
import { FaTimes } from 'react-icons/fa';

const ImageDiv = ({activeTower, updateImageDivStatus, cctvData}) => {
    const [state, setState] = useState({
        cctv:'CCTV1'
    });

    const handleCCTVChange = (cctv) => {
        setState({
            ...state,
            cctv
        });
    }

    const { cctv } = state;
    let data = cctvData.filter(item => item.Camera === cctv);

    console.log(data);
    return (
        <div className='popup-side-tab' id='tab-images'>
          <div className='popup-header'>
            <div className='toggler-section'>
                <div className="d-flex">
                    <div className={cctv == 'CCTV1' ? 'toggler active':'toggler'} onClick={() => handleCCTVChange('CCTV1')} >CCTV1</div>
                    <div className={cctv == 'CCTV2' ? 'toggler active':'toggler'} onClick={() => handleCCTVChange('CCTV2')} >CCTV2</div>
                </div>
              
                <div className='toggler text-warning'>{activeTower["Cell Tower Name"]}</div>

                <div className="">
                    <span className="text-warning">STATUS:</span> 
                    <span className="text-success"> NORMAL </span>
                </div>
            </div>

            <button className="close-button" onClick={updateImageDivStatus}>
                CLOSE
                <FaTimes />
            </button>
          </div>

          <div className='image-section'>
            <div className='d-flex title-section'>
              <div className='text-warning'>Base Image Model Taken</div>
              <div className='text-warning'>Image Analytic Results</div>
            </div>

            {data.map((cctv, index) => {
              return (<div className='img-items' id={cctv.Id} key={index}>
                  <a href={`${cctv.Before}`} className="div-link" target="_blank"> <img src={cctv.Before} alt={cctv.Id} /> </a>
                  <a href={`${cctv.After}`} className="div-link" target="_blank"> <img src={cctv.After} alt={cctv.Id} /> </a>
              </div>)
            })}
          </div>
        </div>
    );
}


export default ImageDiv;