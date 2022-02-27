import PropTypes from 'prop-types';

const StatusContent = ({title, data }) => {
    const getClassName = (item) => {
        if(item.warning) {
            return 'text-warning';
        } else if(item.danger) {
            return 'text-danger'
        } else {
            return 'text-success';
        }
        
    }

    return (
    <>
        <div className='modal-header'>
            <div className='modal-title'>
                { title }
            </div>

            <div className='modal-header-count'>
                Number of sites:
                <div className='text-count'>
                  <h5>{data.length}</h5>
                </div>
            </div>
        </div>

        <div className='modal-body'>
            <table className='table'>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Site Name</th>
                  <th>District Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{item['Cell Tower Name']}</td>
                        <td>{item['District']} </td>
                        <td className={getClassName(item)}>{item['Status'] }</td>
                    </tr>
                  ))}
              </tbody>
            </table>
        </div>
    </>
    )
}

StatusContent.propTypes = {
    title:PropTypes.string,
    data:PropTypes.arrayOf(PropTypes.object)
}

export default StatusContent;