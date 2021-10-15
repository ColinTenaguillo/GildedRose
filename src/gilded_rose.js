class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;

  }

  updateQuality() {
    this.sellIn--

    const minQuality = 0
    if (this.quality > minQuality){
      this.quality--
    }
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.map(item => {
      item.updateQuality()
    })

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
