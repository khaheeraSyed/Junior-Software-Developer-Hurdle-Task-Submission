const express = require('express');
const app = express();
const courses = [];

app.use(express.json());

// Create a course
app.post('/courses', (req, res) => {
    const course = req.body;
    courses.push(course);
    res.status(201).send(`Course created: ${course.title}`);
});

// Retrieve all courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// Update a course by ID
app.put('/courses/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find((course) => course.id === id);
    if (course) {
        course.title = req.body.title;
        course.description = req.body.description;
        course.duration = req.body.duration;
        res.send(`Course updated: ${course.title}`);
    } else {
        res.status(404).send('Course not found');
    }
});

// Delete a course by ID
app.delete('/courses/:id', (req, res) => {
    const { id } = req.params;
    
    courses = courses.filter(c => c.id != id);
    
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
 });