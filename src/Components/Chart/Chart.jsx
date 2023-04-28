import React from "react";
import "./Chart.scss";

const Chart = () => {
  return (
    <section className="chart container-fluid">
      <div className="container d-flex justify-center align-items-center">
        <iframe
          id="dextools-widget"
          title="DEXTools Trading Chart"
          width="500"
          height="400"
          src="https://www.dextools.io/widgets/en/ether/pe-light/0x4d813f64b2eb485540db2b65663f4af74c0e63d1?theme=light&chartType=2&chartResolution=30&drawingToolbars=false"
        ></iframe>
      </div>
    </section>
  );
};

export default Chart;
