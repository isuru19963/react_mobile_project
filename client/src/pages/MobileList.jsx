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
            src="https://www.spigen.co.uk/media/catalog/category/category_banner_ipxs_xr.jpg"
            alt="First slide"
          />
        <MDBMask overlay="black-slight" />
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
            src="http://www.jackys.com/samsung/uploads/home/note_9.jpg"
            alt="Second slide"
          />
        <MDBMask overlay="black-slight" />
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
            src="https://www.mobilephonesdirect.co.uk/assets/img/resources/apple-iphone11-pro-brand-page-banner.jpg"
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
      <h1 className="text-center">Mobile Phone List</h1>
    </MDBContainer>
  <MDBContainer>
  <MDBRow>{this.state.mobiles.map((mobiles) => (
  <MDBCol size="4">
  
      <MDBCard style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={mobiles.image_url} waves />
        <MDBCardBody>
          <MDBCardTitle>{mobiles.name}</MDBCardTitle>
          <MDBCardText>
          Rs:{mobiles.price}
          </MDBCardText>
          <MDBBtn href="#">Add To Cart</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      
    </MDBCol> ))}
  </MDBRow>
  </MDBContainer>
</Wrapper>
       
        )
    }
}

export default MobilesList