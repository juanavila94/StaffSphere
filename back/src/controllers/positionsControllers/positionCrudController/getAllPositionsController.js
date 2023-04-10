const cleanPositions = require('../../../utils/cleanPositions');

const Position = require ('../../../models').Position;

const getPosition = async (CompanyId) =>{
     const position = await Position.findAll({
          where: {
               CompanyId: CompanyId
          }
     })
     if (position.length === 0) throw new Error(`Company or position doesn't exist.`)
     const positionClean = cleanPositions(position);
     return positionClean;
}


module.exports = getPosition;