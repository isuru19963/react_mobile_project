import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MobilesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            brand:'',
            rating: '',
            price:'',
            description:'',
            image_url: ''
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputBrand = async event => {
        const brand = event.target.value
        this.setState({ brand })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }
    handleChangeInputPrice = async event => {
        const price = event.target.validity.valid
            ? event.target.value
            : this.state.price

        this.setState({ price })
    }
    handleChangeInputImage = async event => {
        const image_url = event.target.value
        this.setState({ image_url})
    }
    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }
  
    handleIncludeMobile = async () => {
        const { name,brand, price,rating,description,image_url} = this.state
        
        const payload = { name,brand,rating,price,description,image_url }

        await api.insertMobile(payload).then(res => {
            window.alert(`Mobile inserted successfully`)
            this.setState({
                name: '',
                brand:'',
                rating: '',
                price:'',
                description:'',
                image_url: ''
            })
        })
    }

    render() {
        const { name,brand,rating,price,description,image_url} = this.state
        return (
            <Wrapper>
                <Title>Add Mobile Device</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Label>Brand: </Label>
                <InputText
                    type="text"
                    value={brand}
                    onChange={this.handleChangeInputBrand}
                />
                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />
                <Label>Price: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={price}
                    onChange={this.handleChangeInputPrice}
                />
                <Label>Image URL: </Label>
                <InputText
                    type="text"
                    value={image_url}
                    onChange={this.handleChangeInputImage}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />

                <Button onClick={this.handleIncludeMobile}>Add Mobile</Button>
                <CancelButton href={'/mobile/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MobilesInsert