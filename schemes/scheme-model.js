const db = require('../data/db-config')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}

function find(){
    return db('schemes')
}

function findById(id){
    return db('schemes').where({id}).first()
}

function findSteps(id){
    return db('schemes as sc')
    .join('steps as st', 'sc.id', 'st.scheme_id')
    .where({scheme_id: id})
    .select('st.id', 'sc.scheme_name', 'st.step_number', 'st.instructions')
    .orderBy('st.step_number')
}

function add(scheme){
    return db('schemes')
    .insert(scheme, 'id')
    .then(ids => {
        return findById(ids[0])
    })
}

function addStep(step, id){
    const stepData = {scheme_id: id, ...step}
    return db('steps')
    .insert(stepData)
    .then(id => ({
        ...stepData, id:id[0]
    }))
}

function update(changes, id){
    return db('schemes')
    .where({id})
    .update(changes)
}

function remove(id){
    return db('schemes')
    .where({id})
    .del()
}