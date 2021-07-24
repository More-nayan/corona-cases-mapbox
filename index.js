function updateMap() {
  fetch("data.json")
    .then((response) => response.json())
    .then((rsp) => {
      console.log(rsp.data);

      rsp.data.forEach((element) => {
        let longitude = element.longitude;
        let latitude = element.latitude;

        let cases = element.infected;
        if(cases > 255){
            color = "rgb(255,0,0)";
        }else{
            color = `rgb(${cases},0,0)`;
        }

        //   mark on the map
        new mapboxgl.Marker({
          draggable: false,
          color:color,
        })
          .setLngLat([longitude, latitude])
          .addTo(map);
      });
    });
}

updateMap();
