/**
 * This module works as a data access layer on top of window.localstorage
 * it expose function for performing basic CRUD operations and data validation
 */

 // Fetch a single record from localstorage
 // @param id of record to be retrieved
 // return a javascript object 
 const fetch = (id) => {

 }

 // Saves record to localstorage
 // @param: single object data to be saved
 const save = (data) => {

 }

 // Accepts an id and use it to fetch record from localstorage
 // Applies the update @param to the record fetched
 // Saves updated record
 // @param: id - id of record to be updated, update - new update to be added to the record
 const update = (id, update) => {

 }

 // Accepts an id, fetch record for that id and delete it
 // @param: id
 const delete = (id) => {

 }

 module.exports = { fetch, update, save, delete }