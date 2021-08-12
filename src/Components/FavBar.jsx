import { connect } from "react-redux"

const mapStateToProps = (state) => state

const FavBar = (props) => {
  return (
    <div className="fav-bar">
      <button type="button" class="btn btn-warning btn-fav">
        <h4 className="m-0">Favourites: {props.favourites.length}</h4>
      </button>
    </div>
  )
}

export default connect(mapStateToProps, {})(FavBar)
