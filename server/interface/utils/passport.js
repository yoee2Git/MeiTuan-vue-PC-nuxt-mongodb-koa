import passport from 'koa-passport';
import LocalStrategy from 'passport-local';

import UserModel from "../../dbs/models/users"

passport.use(new LocalStrategy(async function(username,password,done){
  let where = {
    username
  }
  let res = await UserModel.findOne(where);

  if(res !== unll){
    if(re.password === password){
      return done(null,res);
    }
  }
}))