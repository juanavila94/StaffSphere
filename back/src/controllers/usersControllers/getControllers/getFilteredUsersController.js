const { Op } = require('sequelize');
const Users = require('../../../models').Users;
const File = require('../../../models').File;
const Area = require('../../../models').Area;
const Position = require('../../../models').Position;
const cleanInfoDb = require('../../../utils/getUsersCleanDb');

const getFilteredUsersController =  async(name, role ,area, position, sort, CompanyId) => {
    let usersFilterConditions = {};

    if(CompanyId) {
        usersFilterConditions['CompanyId'] = {
            [Op.eq]: CompanyId,
        };
    }
    if(name) {
        usersFilterConditions['name'] = {
            [Op.iLike]: `%${name}%`,
        };
    }

    if (role) {
        usersFilterConditions['role'] = {
            [Op.eq] : role,
        }
    }
    let positionFilterConditions = {};

    if(position) {
        positionFilterConditions['position'] = {
            [Op.eq]: position,
        };
        
    }

    let areaFilterConditions = {};

     if(area)  {
        areaFilterConditions['area'] = {
            [Op.eq] : area,
        }
    }

    const sortConditionsUsers = [Users, 'name']
    
    if (sort) {
        if(sort === 'AtZ') sortConditionsUsers.push('ASC');
        if(sort === 'ZtA') sortConditionsUsers.push('DESC');
    }

    console.log(sortConditionsUsers)
        const results = await File.findAll({
            include:[ {
                model: Users,
                attributes: ['name','lastName', 'role', 'image', 'email', 'CompanyId'],
                where: usersFilterConditions,
            },{
                model: Position ,
                attributes: ['position'],
                where: positionFilterConditions,
            },{
                model: Area, 
                attributes :['area'],
                where : areaFilterConditions
            }
        ],
            order: [sortConditionsUsers]
            
            
            
        })

        if (results.length===0) throw new Error ('The user does not exist, please realize another search.')
        const cleanResults = cleanInfoDb(results)

        return cleanResults;

   

};


module.exports = getFilteredUsersController;