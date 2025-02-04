import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Searchbox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NightsStayIcon from "@mui/icons-material/NightsStay";

export default function InfoBox(info) {
  console.log(info);
  const image =
    "https://plus.unsplash.com/premium_photo-1667926195926-b210e1963e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D";
  const hot =
    "https://media.istockphoto.com/id/171581826/photo/business-commuters-walking-home-after-work-sunset-backlit-blurred-motion.jpg?s=2048x2048&w=is&k=20&c=BqGOb54XCHVs4m-Nu9yjgJdLeyymyW_7UB-meIXUx9M=";
  const cold =
    "https://plus.unsplash.com/premium_photo-1736871836634-65bb2f71993c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D";

  return (
    <div className="infoBox">
      <h2>weather info:</h2>
      <div className="crad-container">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.info.humidity > 50 ? image : info.info.temp > 26 ? hot : cold
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.info.city} - {info.info.temp}&deg;C
              {info.info.humidity > 50 ? (
                <NightsStayIcon sx={{ fontSize: 20 }} />
              ) : info.info.temp > 26 ? (
                <WbSunnyIcon sx={{ fontSize: 20 }} />
              ) : (
                <AcUnitIcon sx={{ fontSize: 20 }} />
              )}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              It's {info.info.weather} & the Maximun will go to:{" "}
              {info.info.tempmax}
              &deg;C & Minimum: {info.info.tempmin}
              &deg;C, humidity will touch {info.info.humidity}.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
