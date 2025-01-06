const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
app.use(cors());
app.use(express.json());

app.post('/convertTime', (req, res) => {
    const { time } = req.body;
    const hours = time.slice(0,2);
    const minutes = time.slice(3,5);
    console.log(`${hours} and ${minutes}`)

    function convertToAMPM(hours, minutes) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        const strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    res.json(convertToAMPM(hours, minutes))
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})