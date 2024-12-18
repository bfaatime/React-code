import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [recipes, setRecipes] = useState([]);
  const [expanded, setExpanded] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.error('API Error:', error));
  }, []);

  const handleExpandClick = (id) => {
    setExpanded((prev) => (prev === id ? null : id));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <header className="menu">
        <h1>Recipe Menu</h1>
        <TextField
          id="search"
          label="Search Recipes"
          variant="outlined"
          onChange={handleSearch}
          className="search-bar"
        />
      </header>

      <div className="card-container">
        {filteredRecipes.map((recipe) => (
          <Card key={recipe.id} className="card">
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {recipe.name[0]}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={recipe.name}
              subheader={`Cooking Time: ${recipe.cookingTime} min`}
            />
            <CardMedia
              component="img"
              height="194"
              image={recipe.image || 'https://via.placeholder.com/345x194'}
              alt={recipe.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {recipe.description}
              </Typography>
              <Typography variant="subtitle1" className="ingredients">
                Ingredients: {recipe.ingredients.join(', ')}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded === recipe.id}
                onClick={() => handleExpandClick(recipe.id)}
                aria-expanded={expanded === recipe.id}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded === recipe.id} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Instructions:</Typography>
                <Typography paragraph>{recipe.instructions}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    </div>
  );
}
