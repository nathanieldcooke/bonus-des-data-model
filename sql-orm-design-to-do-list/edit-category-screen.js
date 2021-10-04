// TODO: import your models, here

const {Category} = require('./models')

class EditCategoryScreen {
  constructor(rl, categoryId) {
    this.rl = rl;
    this.categoryId = categoryId;
    this.greaterThan30 = false;
  }

  async printUi() {
    // TODO: Get the category by its index
    const category = await Category.findByPk(this.categoryId)
    console.log("PRENTin: ", this.categoryId, )
    console.clear();
    console.log("********************************************");
    console.log("* EDIT CATEGORY                 (c) 1987   *");
    console.log("********************************************");
    console.log();
    if(this.greaterThan30) console.log('ALERT: Name must not be greater than 30')
    console.log();


    // TODO: Show the category name here

    console.log(`You are editing "${category.name}"`)

    console.log();
    console.log("What would you like to rename it? Hit");
    console.log("\"Enter\" when you are done.");
    console.log();
  }

  async show() {
    await this.printUi();
    this.rl.question("> ", async newCategoryName => {

      // TODO: Get the category by its categoryId that was passed in through the
      //       constructor and is stored in this.categoryId
      const category = await Category.findByPk(this.categoryId)

      if (newCategoryName.length <= 30) {
        // TODO: Update it with the new category name
        // TODO: Save it
        await category.update({name: newCategoryName})
        new ManageCategoriesScreen(this.rl).show();
      } else {
        this.greaterThan30 = true;
        this.show()
      }

    });
  }
}

exports.EditCategoryScreen = EditCategoryScreen;

// Requires at bottom to prevent circular dependencies problems in node
const { ManageCategoriesScreen } = require('./manage-categories-screen');
