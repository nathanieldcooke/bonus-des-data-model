// TODO: Import your models, here
const {Category} = require('./models')


class ManageCategoriesScreen {
  constructor(rl) {
    this.rl = rl;
  }

  async printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* CATEGORIES                    (c) 1987   *");
    console.log("********************************************");
    console.log();

    // TODO: Get the categories

    const categories = await Category.findAll();

    // TODO: Print the categories with their ids so a user can select one

    categories.forEach(category => {
      console.log(`${category.id}. ${category.name}`);
    });


    console.log();
    console.log("X. Go to main screen");
    console.log();
    console.log("Type a number to edit a category. Type an X");
    console.log("to return to the main menu.");
  }

  async show() {
    await this.printUi();
    this.rl.question("> ", answer => {
      if (answer === 'X') {
        new MainScreen(this.rl).show();
      } else {
        const index = Number.parseInt(answer);

        new EditCategoryScreen(this.rl, index).show();
      }
    });
  }
}

exports.ManageCategoriesScreen = ManageCategoriesScreen;

// Requires at bottom to prevent circular dependencies problems in node
const { EditCategoryScreen } = require('./edit-category-screen');
const { MainScreen } = require('./main-screen');
