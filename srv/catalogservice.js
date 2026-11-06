const cds = require('@sap/cds');
const {Books} = cds.entities;

module.exports = srv => {
    const db = cds.db;

    //read: select
    //create: insert
    //update: update
    //delete: delete

    //read
    // srv.on('READ', 'BooksSet', async(req, res)=>{
    //     results = []

    //     results = await db.run([
    //         SELECT.from(Books)//.where({ID: req.data.ID})
    //     ]);

    //     return results;
    // });

    //create
    srv.on('CREATE', 'BooksSet', async(req, res)=>{
        results = [];
        
        const result = await db.run([
            INSERT.into(Books).entries(req.data)
        ])
        .then((resolve, reject) => {
            if(resolve) 
                return req.data;
            if(reject) 
                return req.error(400, 'Failed to create book entry');
        })
        .catch(err => {
            return req.error(500, err.toString());
        });

        return result;
    });

    //update
    srv.on('UPDATE', 'BooksSet', async(req, res)=>{
        results = [];
        
        const result = await db.run([
            UPDATE(Books).set(req.data).where({ID: req.data.ID})
        ])
        .then((resolve, reject) => {
            if(resolve) 
                return req.data;
            if(reject) 
                return req.error(400, 'Failed to update book entry');
        })
        .catch(err => {
            return req.error(500, err.toString());
        });

        return result;
    });

    //delete
    srv.on('DELETE', 'BooksSet', async(req, res)=>{
        results = [];
        
        const result = await db.run([
            DELETE.from(Books).where({ID: req.data.ID})
        ])
        .then((resolve, reject) => {
            if(resolve) 
                return req.data;
            if(reject) 
                return req.error(400, 'Failed to delete book entry');
        })
        .catch(err => {
            return req.error(500, err.toString());
        });

        return result;
    });


}