import React from "react";

const Map = () => {
  return (
    <>
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3%20Abbey%20Road,%20after%20NYSC%20Bus%20Stop,%20Along%20Kubwa,%20Express%20way,%20Abuja+(C-STEMP%20LTD/Gtee)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        {/* <a href="https://www.maps.ie/distance-area-calculator.html">
          measure acres/hectares on map
        </a> */}
      </iframe>
    </>
  );
};

export default Map;
