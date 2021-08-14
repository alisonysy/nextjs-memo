const AV = require('leancloud-storage');

export const saveData = (name,fields) => { // save only one record at a time
  let Db = AV.Object.extend(name);
  let db_ins = new Db();
  if(Object.prototype.toString.call(fields) !== '[object Array]'){
    throw new Error('Must provide an array!')
  }
  if(!fields.length)return;
  for(let n = 0;n<fields.length;n++){
    db_ins.set(fields[n].name,fields[n].value);
  }
  return db_ins.save();
}