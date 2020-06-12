'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const imageService = require('./image-service');
const favImageService = require('./fav-image-service');

const server = express();
//enable for every origin make is easier to dev
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
  }
server.use(cors(corsOptions));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

const port = 8357;

/**
 * @api {get} /api/images Request image information
 * 
 * @apiSuccess {object} Return search results for
 * @apiError {object} 404 code with error object
 */
server.get('/api/images', async (req, res, next) => {
    console.log("/api/images get hit");
    try {
        const result = imageService.getImageInfo();
        const favImages = favImageService.get() || [];
        favImages.forEach(element => {
            const index = result.findIndex(item => item.imdbID === element );
            result[index]['isFav'] = true;
        });
        res.send({ data: result });
    } catch (err) {
        res.status(404).send({  
            error: err.message
        });
    }
});

/**
 * @api {delete} /api/clearFavImages Clear server side storage of fav images
 * 
 * @apiSuccess {object} Status of the clear storage
 */
server.delete('/api/clearFavImages', async (req, res) => {
    console.log("/api/clear delete hit");
    favImageService.flush();
    res.send({ data: 'cleared' });
});

/**
 * @api {get} /api/favImages Clear server side cache
 * 
 * @apiSuccess {object} Liked images or empty array
 */
server.get('/api/favImages', async (req, res) => {
    console.log("/api/favImage get hit");
    const result = imageService.getImageInfo();
    const favImages = favImageService.get() || [];
    const likedImages = favImages.reduce((acc,cur) => {
        const obj = { ...(result.find(item => item.imdbID === cur)) };
        obj['isFav'] = true;
        acc.push(obj);
        return acc;
    },[]);
    res.send({ data: likedImages });
});

/**
 * @api {post} /api/favImage add liked image
 * 
 * @apiSuccess {object} Array of liked images
 */
server.post('/api/favImages', async (req, res) => {
    console.log('/api/favImages post hit');
    const { imageId } = req.body;
    imageId && favImageService.add(imageId);
    res.send({ data: favImageService.get() });
});

/**
 * @api {delete} /api/favImages Unliked photos
 * 
 * @apiSuccess {object} return liked photos
 */
server.delete('/api/favImages', async (req, res) => {
    console.log("/api/favImages delete hit");
    const { imageId } = req.body;
    imageId && favImageService.remove(imageId);
    res.send({ data: favImageService.get() });
});

server.listen(port, () => console.log(`App start ${port}`));