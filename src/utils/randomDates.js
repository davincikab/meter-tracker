const addRandomDates = (data ) => {
    let items = data.map(item => {
        let date =  generateRandomDates();
        let time = generateRandomTimeStamp();

        item['label'] = `${date} ${time}`;

        return item;
    });

    return items;
}

// any day (7 seven days)
const generateRandomDates = () => {
    let date = new Date();
    
    let minDate = date - (3 * 24 * 60 * 60 * 1000);
    let days = Math.floor(Math.random() * 7);

    let tDate = minDate + (days * 24 * 60 * 60 * 1000);
    tDate = new Date(tDate);

    return `${zeroPad(tDate.getDate())}-${zeroPad(tDate.getMonth() + 1)}-${tDate.getFullYear()}`
}

const generateRandomTimeStamp = () => {
    let date = new Date();
    let minHrs = date - (12 * 60 * 60 * 1000);

    let hrs = Math.floor(Math.random() * 12);
    let minutes = Math.floor(Math.random() * 60);

    minHrs = new Date(minHrs + (hrs * 60 * 60 * 1000));

    return `${ zeroPad(minHrs.getHours() + hrs)}:${zeroPad(minutes)} `;
}

const zeroPad = (val) => {
    return `${val}`.length == 1 ? `0${val}` : val;
}

export default addRandomDates;