import sequelize from './sequelize';
import User from './User';
import Specialty from './Specialty';
import Test from './Test';
import Doctor from './Doctor';
import Review from './Review';
import Question from './Question';
import Option from './Option';
import Answer from './Answer';

import relations from './relations';

Object.values(relations).forEach((relationsFunction: Function) => {
    relationsFunction();
});


export {
    sequelize,
    User,
    Specialty,
    Test,
    Doctor,
    Review,
    Question,
    Option,
    Answer
};