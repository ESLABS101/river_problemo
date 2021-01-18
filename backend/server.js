//import express from "express";
//import cors from 'cors';
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.post("/", (req, res) => {
  let time_taken, displacement, speed;
  
  const { river_velocity, person_velocity, width ,angle_of_swim} = req.body;
  
  if(angle_of_swim  <= 90) {
    speed = person_velocity + river_velocity;
    time_taken = width / ((speed)* Math.sin(angle_of_swim*0.0174533));
  } else{
    speed = person_velocity - river_velocity
    time_taken = width / (speed * Math.cos(angle_of_swim*0.0174533));
  }

  displacement = speed * time_taken;
  displacement = Math.sqrt((displacement * displacement) -( width * width));
  console.log(displacement);
  console.log(time_taken);
  res.status(200).json({ time_taken, displacement });
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
