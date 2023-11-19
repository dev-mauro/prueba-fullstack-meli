import { Router } from "express";

import { endpoints } from "../constants/endpoints.js";
import { searchResponseDTO } from "../DTO/searchResponse.dto.js";
import { productResponseDTO } from "../DTO/productResponse.dto.js";

const router = Router();

router.get('/', async (req, res) => {

  const { q } = req.query;

  if( !q ) return res.status(400).send({
    success: false,
    message: 'invalid request'
  })

  const meliRes = await fetch( endpoints.search( q ) );
  const meliData = await meliRes.json();

  const payload = searchResponseDTO( meliData );
  payload.author = {
    name: 'Mauro',
    lastName: 'Silva'
  }

  res.send({
    success: true,
    payload
  });

});

router.get('/:id', async (req, res) => {

  const { id } = req.params;

  if( !id ) return res.status(400).send({
    success: false,
    message: 'invalid request'
  })

  const prodRes = await fetch( endpoints.product( id ) );

  if( prodRes.status === 404 )
    return res.status(404).send({success: false, message: 'product-not-found'});

  const prodData = await prodRes.json();
  
  const prodDecsRes = await fetch( endpoints.productDesc( id ) );
  const prodDescData = await prodDecsRes.json();


  const payload = productResponseDTO( prodData, prodDescData )
  payload.author = {
    name: 'Mauro',
    lastName: 'Silva'
  }

  res.send({
    success: true,
    payload
  });

});

export default router;