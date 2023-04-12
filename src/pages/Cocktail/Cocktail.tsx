import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import Recipe from "../../components/Recipe";

function Cocktail() {
  return (
    <div>
      <div>Здесь рецепт</div>
      <Recipe />
    </div>
  );
}

export default Cocktail;
