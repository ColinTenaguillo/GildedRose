// Would have use static value in Item but
// not yet supported in current ECMASCRIPT
const baseDecreaseValue = 1

class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;

  }

  updateQuality() {
    this.sellIn--
    this.decreaseQuality(1)
  }

  decreaseQuality(factor = 1) {
    const minQuality = 0
    if (this.quality > minQuality){
      
      const outdated = 0
      if (this.sellIn <= outdated){
        console.log(this.sellIn)
        this.quality = this.quality - ((baseDecreaseValue * 2) * factor)
        if (this.quality < 0){
          this.quality = 0
        }
      }
      else {
        this.quality = this.quality - (baseDecreaseValue * factor)
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

class Legendary extends Item {
  updateQuality(){}
}

class Backstage extends Item {
  updateQuality(){
    this.sellIn--

    const tenDays = 10
    const fiveDays = 5
    const concertEnded = 0
    
    if (this.sellIn <= concertEnded){
      this.quality = 0
    }
    else if (this.sellIn <= fiveDays){
      this.quality = this.quality + 3
    } 
    else if (this.sellIn <= tenDays) {
      this.quality = this.quality + 2
    }
  }
}

class Conjured extends Item {
  updateQuality() {
    this.sellIn--
    this.decreaseQuality(2)
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
  Cheese,
  Legendary,
  Backstage,
  Conjured,
}
