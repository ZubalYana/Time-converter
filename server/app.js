const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/convertTime', (req, res) => {
    const { time } = req.body;
    const hours = parseInt(time.slice(0, 2), 10);
    const minutes = parseInt(time.slice(3, 5), 10);
    console.log(`${hours} and ${minutes}`);
    function convertToAMPM(hours, minutes) {
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const convertedHours = hours % 12 || 12; 
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        return `${convertedHours}:${formattedMinutes} ${ampm}`;
    }
    res.send(convertToAMPM(hours, minutes)); 
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
