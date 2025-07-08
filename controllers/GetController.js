const crypto = require('crypto');
const DataAccess = require('./database/DataAccess');
const jwt = require('jsonwebtoken');




exports.getWeaverData = async (req, res) => {
     try {
       console.log("Fetching all weaversData...");
       const weaversData = await DataAccess.getWeaverData();
       res.json(weaversData);
     } catch (error) {
       console.error('Error:', error);
       res.status(500).json({ message: 'Error fetching weaversData', error });
     }
   };
   
   exports.getWeaverDesignData = async (req, res) => {
    try {
      console.log("Fetching all weavers Design Data...");
      const weaversData = await DataAccess.getWeaverDesignData();
      res.json(weaversData);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Error fetching weavers Deisgn Data', error });
    }
  };
   