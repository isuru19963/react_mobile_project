import React, { Component } from 'react'
import api from '../api'
import { MDBContainer, MDBCardText,MDBRow, MDBCol,MDBBtn, MDBCard, MDBCardImage, MDBCardBody,MDBCardTitle } from "mdbreact";

import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from "mdbreact";
import styled from 'styled-components'


import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class MobilesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
        mobiles: [],
        columns: [],
        isLoading: false,
    }
}

componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllMobile().then(mobiles => {
        this.setState({
          mobiles: mobiles.data.data,
            isLoading: false,
        })
    })
}

    render() {
      const { mobiles, isLoading } = this.state
      console.log('TCL: MobileList -> render -> mobiles', mobiles)
        

  

        return (
          <Wrapper>
    <MDBContainer>
    <MDBCarousel
    activeItem={1}
    length={3}
    showControls={true}
    showIndicators={true}
    className="z-depth-1"
  >
    <MDBCarouselInner>
      <MDBCarouselItem itemId="1">
        <MDBView>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
            alt="First slide"
          />
        <MDBMask overlay="black-light" />
        </MDBView>
        <MDBCarouselCaption>
          <h3 className="h3-responsive">Light mask</h3>
          <p>First text</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="2">
        <MDBView>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
            alt="Second slide"
          />
        <MDBMask overlay="black-strong" />
        </MDBView>
        <MDBCarouselCaption>
          <h3 className="h3-responsive">Strong mask</h3>
          <p>Second text</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
      <MDBCarouselItem itemId="3">
        <MDBView>
          <img
            className="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
            alt="Third slide"
          />
        <MDBMask overlay="black-slight" />
        </MDBView>
        <MDBCarouselCaption>
          <h3 className="h3-responsive">Slight Mast</h3>
          <p>Third text</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarouselInner>
  </MDBCarousel>
  </MDBContainer>
        

        <MDBContainer>
         <MDBRow>
            <MDBCol size="4" >
            <MDBCard wide ecommerce>
              <MDBCardImage cascade className="img-fluid" src="https://i.dailymail.co.uk/1s/2019/09/24/18/18881744-7499677-image-a-4_1569346801238.jpg"  top waves />
              <MDBCardBody>
                <MDBCardTitle>ff</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
            </MDBRow>

          </MDBContainer>
          </Wrapper>
       
        )
    }
}

export default MobilesList