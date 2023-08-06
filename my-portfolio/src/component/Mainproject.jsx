import React from "react";
import styled from "styled-components";
// import projectimg from "../images/music.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export default function Mainproject({projectimg,tech,title,about,deploy,github}) {
  return (
    <Maincardsdisplay>
      <div className="leftimagemain">
        <img src={projectimg} alt="" />
      </div>
      <div className="rightmain">
        <div className="techstack">
            <h2>{title}</h2>
            {tech.map((data)=>{
                return <span>{data}</span>
            })}
        </div>
        <div className="aboutproject">
            {about}
        </div>
        <div className="buttons">
            <div className="github">
                <a href={github} target="_blank" rel="noopener noreferrer">Github <GitHubIcon /></a>
            </div>
            <div className="website">
                <a href={deploy} target="_blank" rel="noopener noreferrer">Deployment <ArrowOutwardIcon /></a>
            </div>
        </div>
      </div>
    </Maincardsdisplay>
  );
}
const Maincardsdisplay = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 25rem;
  @media (max-width:990px) {
    position: relative;
    width: 100%;
    margin: 2rem 0rem;
    text-align: center;
    .leftimagemain {
    width: 100% !important;
    height: 90%;
  }
    .rightmain{
        position: absolute;
        width: 100% !important;
        background-color: rgba(0, 0, 0, 0.8);
        color: white;
        margin: 1rem;
    }
    .techstack{
    text-align: center !important;
  }
  }
  .leftimagemain {
    width: 50%;
    height: 90%;
  }
  .rightmain{
    width: 50%;
    height: 90%;
    display: flex;
    justify-content: space-evenly;
    /* align-items: center; */
    padding: 2rem;
    flex-direction: column;
  }
  .leftimagemain img{
    width: 100%;
    height: 100%;
  }
  .techstack{
    text-align: right;
  }
  .techstack span{
    background-color: #6c5ce7;
    padding: 0.5rem;
    margin: 0.2rem;
    font-weight: bold;
    border-radius: 0.4rem;
    color: white;
  }
  .buttons{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .github,.website{
    padding: 0.5rem 1rem;
    background-color: #6c5ce7;
    display: flex;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
  }
  .github a,.website a{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;
