import React, { Component } from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import ImageContent from "./ImageContent";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.35;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: "",
        projectName: "",
        projectDesc: "",
        projectType: "",
        roles: [""],
        link:"",
        buttonText:"",
      },
      
      
      {
        number: "01",
        projectName: "SmartMuv",
        projectDesc:
          "Solidity Smart Contract State Extraction, Migration and Transaction Analysis Platform",
        projectType: "WEB APP",
        roles: ["React", "Solidity", "EVM", "MongoDB", "Python"],
        link:"https://smartMuv.app",
        buttonText:"Live Demo",
      },
      {
        number: "02",
        projectName: "Web3RSVP",
        projectDesc:
          "Discover what's happening in the metaverse Find, join, and create virtual events with your web3 friends!",
        projectType: "Web3 App",
        roles: ["React", "IPFS", "Polygon", "RainbowKit", "GraphQL"],
        link:"https://github.com/zain335/Web3RSVPDApp",
        buttonText:"View on Github",
      },
      {
        number: "03",
        projectName: "PKIChain",
        projectDesc:
          "Revolutionizing Internet Security with Blockchain-based SSL/TLS Certificates",
        projectType: "WEB DAPP",
        roles: ["Vue", "Mysql", "Solidity", "ERC", "Node"],
        link:"https://pkichain.com",
        buttonText:"Live Demo",
      },
      {
        number: "04",
        projectName: "EstateChain",
        projectDesc:
          "EstateChain offers customers an on-demand experience for selling, buying, renting and financing with transparency and nearly seamless end-to-end service using blockchain technology.",
        projectType: "NFT DApp",
        roles: ["NFT","ERC721", "Hardhat", "EtherJs", "React"],
        link:"https://github.com/zain335/EstateChain",
        buttonText:"View on Github",
      },
      {
        number: "05",
        projectName: "CrowdCoin",
        projectDesc:
          "Blockchain implementation of Kickstarter project for crowd-funding to bring a creative project to life by ensuring the trust of investors. ",
        projectType: "Web Application",
        roles: ["NextJs", "Semantic-UI","Web3Js","Solidity","Mocha"],
        link:"https://github.com/zain335/CrowdCoin",
        buttonText:"View on Github",
      },
      // {
      //   number: "06",
      //   projectName: "WhatsMyFood",
      //   projectDesc:
      //     "iOS app to remember your fav food at each restaurant you eat.",
      //   projectType: "iOS APP",
      //   roles: ["Front-end Developer", "UI Designer"],
      // },
      {
        number: "",
        projectName: "",
        projectDesc: "",
        projectType: "",
        roles: [""],
        link:"",
        buttonText:"",
      },
    ];
  }

  componentDidMount() {
    
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      vh: Math.round(
        window.document.documentElement.clientHeight * this.pageSplitTimes
      ),
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;

    if (
      Math.floor(scrollDistance / vh) !== slideNumber &&
      slideNumber < this.workDetails.length - 1
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (
      slideNumber === this.workDetails.length - 1 &&
      Math.floor(scrollDistance / vh) < slideNumber
    ) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    console.log("render");
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <div>
        <TextContent
          number={this.workDetails[slideNumber].number}
          projectName={this.workDetails[slideNumber].projectName}
          projectDesc={this.workDetails[slideNumber].projectDesc}
          projectType={this.workDetails[slideNumber].projectType}
          link = {this.workDetails[slideNumber].link}
          buttonText = {this.workDetails[slideNumber].buttonText}
          roles={this.workDetails[slideNumber].roles}
          refreshToggle={refresh}
          
        />
      </div>
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
