// TODO: Import your models, here
const {Category, Item, Sequelize: {Op}} = require('./models');

class SearchScreen {
  constructor(rl) {
    this.rl = rl;
  }

  async printUi() {
    console.clear();
    console.log("********************************************");
    console.log("* SEARCH ITEMS                  (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("Please type your search term and hit Enter.");
    console.log();
  }

  async printResultsUi(term) {
    console.clear();
    console.log("********************************************");
    console.log("* SEARCH RESULTS                (c) 1987   *");
    console.log("********************************************");
    console.log();
    console.log("Your search matches");
    console.log();

    // TODO: Search the notes and to-do items
    // console.log('Search Term: ', term)
    const searchResults = await Item.findAll({
      where: {
        text: {
          [Op.iLike]: `%${term}%`
        }
      },

      include: Category
    })

    // TODO: Print them out
    
    // number of rows available to print to console
    let rowsAva = process.stdout.rows - 8;
    
    // flatten results by category
    const itemsByCat = {}
    
    searchResults.forEach(result => {
      const category = result.Category.name;
      const item = result.text
      if (itemsByCat[category]) {
        itemsByCat[category].push(item);
      } else {
        itemsByCat[category] = [item];
      }
    })

    // print items
    let currCat = null;
    let currItemIdx = 0;
    for (let key in itemsByCat) {
      if (currCat !== key) {
        currCat = key;
        console.log(`Category: ${currCat}`)
        currItemIdx = 0;
      }
      while (itemsByCat[currCat][currItemIdx] && rowsAva > 0) {
          const currItem = itemsByCat[currCat][currItemIdx]
          console.log(` ${currItemIdx + 1} ${currItem}`)
          currItemIdx++
          rowsAva--;
      }
    }

    console.log();
  }

  async show() {
    await this.printUi();
    this.rl.question("> ", async term => {
      await this.printResultsUi(term);
      this.rl.question("Enter to return to the main screen. ", () => {
        const screen = new MainScreen(this.rl);
        screen.show();
      });
    });
  }
}

exports.SearchScreen = SearchScreen;

const { MainScreen } = require('./main-screen');
