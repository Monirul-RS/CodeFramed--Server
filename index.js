const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000 ;

app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json')


app.get('/', (req, res) =>{
    res.send('Learning Platform running');
});

app.get('/courses', (req, res) =>{
    res.send(courses);
});

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const course_details = courseDetails.filter(c => c.course_id === id);
    res.send(course_details) ;
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    // console.log(req.params.id);
    const selectedCourse = courseDetails.find( courseDetail => courseDetail._id === id);
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log("Learning platform server running on port", port);
} )