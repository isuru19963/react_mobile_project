import React, { Component } from 'react'
import api from '../api'
import { MDBContainer, MDBRow, MDBCol,MDBBtn, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import styled from 'styled-components'


import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        
        

  

        return (
        <Wrapper>

        <MDBContainer>
         <MDBRow>
            <MDBCol size="4" >
            <MDBCard wide ecommerce>
              <MDBCardImage cascade className="img-fluid" src="https://i.dailymail.co.uk/1s/2019/09/24/18/18881744-7499677-image-a-4_1569346801238.jpg"  top waves />
              <MDBCardBody>
                <MDBCardTitle>FFF</MDBCardTitle>
                <MDBCardText>
                  Some quick example text to build on the card title and make
                  up the bulk of the card&apos;s content.
                </MDBCardText>
                <MDBBtn href="#">MDBBtn</MDBBtn>
              </MDBCardBody>
            </MDBCard>
            </MDBCol>
              <MDBCol size="4">
              <MDBCard wide ecommerce>
                <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                <MDBCardBody>
                  <MDBCardTitle>FFF</MDBCardTitle>
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

export default MoviesList