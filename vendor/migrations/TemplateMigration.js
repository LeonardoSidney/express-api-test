import mongoose from "mongoose"

/**
 * 
 * @param {mongoose.Model} model
 * @returns {mongoose.Document[]}
 */

export async function up (model) {
    // model.create({ id: 'pf0ZoB1FwH6', name: 'Floratta', price: 6000 })
}

/**
 * 
 * @param {mongoose.Model} model
 * @returns {mongoose.Document}
 */
export async function down (model) {
    await model.deleteMany({})
}