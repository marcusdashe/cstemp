import React from "react";

const Map = () => {
  return (
    <div className="mt-20">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.1536631863783!2d7.306696774885475!3d9.140590890925306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd9b48b0d7dc9%3A0xbe40dcfc4691310b!2sC-STEMP%20LTD%2FGtee!5e0!3m2!1sen!2sng!4v1684374113987!5m2!1sen!2sng"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3%20Abbey%20Road,%20after%20NYSC%20Bus%20Stop,%20Along%20Kubwa,%20Express%20way,%20Abuja+(C-STEMP%20LTD/Gtee)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      > */}
      {/* <a href="https://www.maps.ie/distance-area-calculator.html">
          measure acres/hectares on map
        </a> */}
      {/* </iframe> */}
    </div>
  );
};

export default Map;
