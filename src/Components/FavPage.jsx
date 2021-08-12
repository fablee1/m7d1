import { InputGroup, FormControl, Button, Row, Col } from "react-bootstrap"
import { useState } from "react"
import { useHistory } from "react-router-dom"
import { connect } from "react-redux"
import {
  addToFavouritesAction,
  removeFromFavouritesAction,
} from "../redux/actions/index.js"

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  addToFavourites: (companyName) => dispatch(addToFavouritesAction(companyName)),
  removeFromFavourites: (companyName) =>
    dispatch(removeFromFavouritesAction(companyName)),
})

const FavPage = (props) => {
  return <div>Hi</div>
}

export default connect(mapStateToProps, mapDispatchToProps)(FavPage)
