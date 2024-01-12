import { useState, useEffect } from "react";

function Experience() {
  const exp = [
    {
      role: "ADCS Lead",
      place: "Dalhousie Space Systems",
      period: "Jan 2024 - present",
      desc: [
        "Lead a technical team of 4 for design and development of ADCS for CubeSat Mission",
        "Manage and define ADCS requirements and resource needs which align with mission requirements",
        "Collaborate closely with the Mission Director and other subsystem leads for strategic decision-making and present regular updates on ADCS developments to the same",
      ],
    },

    {
      role: "OBC: Member",
      place: "Dalhousie Space Systems",
      period: "Sept 2023 - present",
      desc: [
        "Researched most suitable databases for the CubeSat mission, considering the nature of the data to be collected and utilized",
        "Developing a database to store serialized images and their metadata",
      ],
    },

    {
      role: "Service Desk Associate",
      place: "Dalhousie IT Services",
      period: "Sept 2023 - present",
      desc: [
        "Monitor LabStats Software to verify computer and printers are functioning properly",
        "Troubleshoot systems and printers which are offline, reporting the ones which are not functional",
      ],
    },
  ];
  
  return (
    <div className="experience-container">

      <h2>Experience</h2>

      <ul className="exp-list" >

        {exp.map((item, i) => (
          <li key={i}>

            <h3>{item.role}</h3>

            <h5 className="spaced-heading">
              {exp[i].place} {exp[i].period}
            </h5>

            <ul className="desc-list">
              {exp[i].desc.map((d) => (
                <li>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Experience;
