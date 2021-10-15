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
      
      const outdated = 0
      if (this.sellIn <= outdated){
        this.quality = this.quality - 2
        if (this.quality < 0){
          this.quality = 0
        }
      }
      else {
        this.quality--
      }
    }
  }
}

class Cheese extends Item {
  updateQuality(){
    this.sellIn--

    const maxQuality = 50
    if (this.quality < maxQuality){
      this.quality++
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
  Shop,
  Cheese
}
