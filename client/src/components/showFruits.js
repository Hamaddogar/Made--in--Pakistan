import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import { Wave } from 'react-animated-text';
const ExampleOne = () => (
  <Wave text="All Catigories" />
);
const styles = {

  card: {
    maxWidth: 300,


  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class  ShowFruits extends React.Component {
  state = {
    showFruits: []
  }

  componentDidMount() {
    fetch("http://localhost:8000/showFruits")
      .then(response => response.json())
      .then((res) => {
        console.log(res);
        this.setState({ showFruits: res.data })
      })
      .catch((error) => console.log(error))
  }

  detailfunction=(myid)=>{
    

 
  }
  render() {
    const { classes } = this.props;



    return (
        <div>
    
      <br/><br/>
      <div class="container">
    <center> <h2><Wave text="Show Food" effect="stretch" effectChange={2.2} /></h2></center>
        <div class="row">
        
          {this.state.showFruits.map((user) => {

            return <div key={user._id} >
              <div class="col-sm-12">

                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="Contemplative Reptile"
                      className={classes.media}
                      height="300"
                     
                      image={"http://localhost:8000/" + user.photoname[2]}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {user.ProductName}
                      </Typography>
                    
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={'/detailrouter/'+user._id}>
                    <Button size="small" color="primary">
                     Detail
        </Button>
        </Link>
                   <h6>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Price   {user.Price}  pkr
      
                    </h6>
        
                  </CardActions>

                </Card>
<br/>
              </div>
            
          
            </div>




          })}

        </div>
      </div>
      </div>
    );
  }
}
ShowFruits .propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShowFruits );