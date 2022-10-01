import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import { cameraData } from "../../mocks/data";

const ImageDiv = ({activeTower, updateImageDivStatus, cctvData, cameraData }) => {
    const [state, setState] = useState({
        activeTab:'CCTV1'
    });

    const handleTabChange = (activeTab) => {
        setState({
            ...state,
            activeTab
        });
    }

    const renderTableRows = (camera, columnNames) => {
      return camera.map((info, id) => {
        return <tr key={id + "row"}>
            {columnNames.map((column, k) => <td key={k}>{info[column]}</td>)}
          </tr>
        })
      
    }

    const renderCameraTables = (cameraInfo) => {
      console.log(cameraInfo);

      let cameras = Object.keys(cameraInfo);

      return cameras.map((cameraKey, id) => {
        let camera = cameraInfo[cameraKey];
        let columnNames = Object.keys(camera[0]);

        return <div key={id + "-table"} className="camera-section">
            <div className="table-title">Camera {id}</div>
            <table className="table">
              <thead>
                {columnNames.map((name, i) => <th>{name}</th>)}
              </thead>
              <tbody>
                {renderTableRows(camera, columnNames)}
              </tbody>
            </table>
          </div>
      })
    }

    const { activeTab } = state;
    let data;

    if(activeTab == 'Antenna') {
      data = {...cameraData };
      console.log("Antenna");
    } else {
      data = cctvData.filter(item => item.Camera === activeTab);
    }

    console.log(data);
    // console.log(cameraData);

    return (
        <div className='popup-side-tab' id='tab-images'>
          <div className='popup-header'>
            <div className='toggler-section'>
                <div className="tab-toggler d-flex">
                    <div className={activeTab == 'CCTV1' ? 'toggler active':'toggler'} onClick={() => handleTabChange('CCTV1')} >CCTV1</div>
                    <div className={activeTab == 'CCTV2' ? 'toggler active':'toggler'} onClick={() => handleTabChange('CCTV2')} >CCTV2</div>
                    <div className={activeTab == 'Antenna' ? 'toggler active':'toggler'} onClick={() => handleTabChange('Antenna')} >Camera Report</div>
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
            <div className='d-flex title-section d-none'>
              <div className='text-warning'>Base Image Model Taken</div>
              <div className='text-warning'>Image Analytic Results</div>
            </div>

            {activeTab != "Antenna" && data.map((cctv, index) => {
              return (<div className='img-items' id={cctv.Id} key={index}>
                  <a href={`${cctv.Before}`} className="div-link" target="_blank"> <img src={cctv.Before} alt={cctv.Id} /> </a>
                  <a href={`${cctv.After}`} className="div-link" target="_blank"> <img src={cctv.After} alt={cctv.Id} /> </a>
              </div>)
            })}

            {/* tables */}
            {
              activeTab == "Antenna" &&
              renderCameraTables(data)
            }
          </div>
        </div>
    );
}

export default ImageDiv;