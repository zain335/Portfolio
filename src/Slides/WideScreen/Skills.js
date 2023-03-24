import React, { Component } from "react";
import styled from "styled-components";
import device from "../../Assets/Responsive/breakpoints";

const Container = styled.div`
  height: 120vh; /* Since pageSplitTime is 1.4 */
  width: 100%;
  /* border: 1px solid blue; */
  position: relative;
  overflow: hidden;
`;

const SkillsTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 3.5}%)`,
  }),
})`
  transition: transform 0.5s ease-out;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:5%;
  left:-15%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;


const SkillsList = styled.div`
  /* border: 1px solid #EFEFEF; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: "AvenirRoman";
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
  @media ${device.laptop} {
    font-size: 35px;
  }
  @media ${device.laptopL} {
    font-size: 40px;
  }
  @media ${device.desktop} {
    font-size: 70px;
  }
`;

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      scrollHeight: Math.round(window.document.documentElement.scrollHeight),
    });
    this.setState({
      screenHeight: Math.round(window.document.documentElement.clientHeight),
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const sd = Math.max(body.scrollTop, documentElement.scrollTop);
    let sp =
      (sd / (documentElement.scrollHeight - documentElement.clientHeight)) *
      100;
    const minlimit =
      (documentElement.clientHeight * 650) / documentElement.scrollHeight;
    const maxlimit =
      (documentElement.clientHeight * 880) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit + 3) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <SkillsTitle scrollPercent={scrollPercent}>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            JavaScript
            <br />
            Java
            <br />
            Python
            <br />
            Solidity
            <br />
            C/C++
            <br />
            leo
            <br />
          </div>
          <div>
            Web3Js
            <br />
            EtherJs
            <br />
            Libsnark
            <br />
            Zokrates
            <br />
            Circom
            <br />
            Skikit-learn
            <br />
            PyTorch
            <br />
            Numpy
            <br />
            Pandas
            <br />
            OpenCV
          </div>
          <div>
            Oracle
            <br />
            MySQL
            <br />
            PostgreSQL
            <br />
            SqLite
            <br />
            MongoDB
            <br />
            Firebase
            <br />
            MS SQL Server
          </div>
          <div>
            React JS
            <br />
            Vue JS
            <br />
            Node JS
            <br />
            Express JS
            <br />
            Truffle
            <br />
            Openzeppelin
            <br/>
            Hardhat
            <br/>
            Ganache
            <br/>
            K-Framework
            <br/>
            KEVM

          </div>
          <div>
            Visual Studio Code
            <br /> Git
            <br /> IntelliJ
            <br /> Eclipse
            <br /> Jupyter Notebook
            <br /> zkREPL
            <br /> Aleo Studio
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;
