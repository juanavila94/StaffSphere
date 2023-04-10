const cleanGetDetail = require('../../../utils/cleanGetDetail');

const File = require('../../../models').File;
const Users = require('../../../models').Users;
const Area = require('../../../models').Area;
const Position = require('../../../models').Position;

const getDetailController = async(CompanyId, id) => {
  
        const fileIdDb = await File.findOne({
            where: {
                UserId: id
            },
            include:[ {
                model: Users,
                where: {
                    CompanyId: CompanyId
                }
               
            },{
                model: Position,
                attributes: ['id','position']
            },
            {
                model: Area,
                attributes: ['id','area']
            }
        ]
        });

        if(!fileIdDb) throw new Error(`The user does not exist` )

        return cleanGetDetail(fileIdDb);

};

module.exports = getDetailController;