'use strict'

const store = require('data-store')({ path: `${process.cwd()}/store.json` });

/**
 * Add favorite image to the store
 * 
 * @param {*} imageId 
 */
const add = async (imageId) => {
    try {
        const favImages = store.get('favImages');
        store.set('favImages',favImages ? favImages.concat(imageId) : [imageId]);
    } catch (err) {
        console.log("add fav image error",err);
    }
}

/**
 * Get favorite images from the store
 * 
 */
const get = () => {
    return store.get('favImages');
}

/**
 * Remove favorite image from the store
 * 
 * @param {*} imageId 
 */
const remove = (imageId) => {
    const favImages = store.get('favImages');
    store.set('favImages', favImages.filter(item => item !== imageId));
}

/**
 * Remove all data inside the cache
 */
const flush = () => {
    store.clear();
}

module.exports = {
    add,
    get,
    remove,
    flush
}