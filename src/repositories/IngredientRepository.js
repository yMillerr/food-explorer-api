const knex = require("../database/knex")

class IngredientRepository {
  async delete(id){
    const ingredients = await knex('ingredients').where({ id }).delete()

    return ingredients
  }
  
  async findIngredientsByProductId(product_id){
    const ingredients = await knex('ingredients').where({ product_id })

    return ingredients
  }

  async fetchAllIngredients(){
    const ingredients = await knex("ingredients").orderBy("name")

    return ingredients
  }

  async create(ingredients) {
    await knex('ingredients').insert(ingredients)
  }
}

module.exports = IngredientRepository