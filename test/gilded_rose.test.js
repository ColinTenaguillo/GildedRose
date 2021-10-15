const {
  Shop,
  Item,
  Cheese,
  Legendary,
  Backstage
} = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("Normal items should decrease 1 quality & 1 sellIn", () => {
    const gilded = new Shop([new Item("NormalItem", 10, 20)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  })

  it("Items quality should never be below 0", () => {
    const gilded = new Shop([new Item("NomalItem", 10, 0)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(0);
  })

  it("Item sellIn at 0 should decrease quality by two", () => {
    const gilded = new Shop([new Item("NomalItem", 0, 10)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(8);
  })

  it("Aged Brie sellIn 2 & quality 0 should return sellIn 1 & quality 1 ", () => {
    const gilded = new Shop([new Cheese("Aged Brie", 2, 0)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  })

  it("An item can never be more than 50 ", () => {
    const gilded = new Shop([new Cheese("Aged Brie", 1, 50)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  })

  it("legendaray item never loose quality", () => {
    const gilded = new Shop([new Legendary("Sulfuras, Hand of Ragnaros", 0, 80)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  })

  it("Backstage passes sellIn <= 10 quality increase by two", () => {
    const gilded = new Shop([new Backstage("Backstage passes to a TAFKAL80ETC concert", 8, 20)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(7);
    expect(items[0].quality).toBe(22);
  })

  it("Backstage passes sellIn <= 5 quality increase by three", () => {
    const gilded = new Shop([new Backstage("Backstage passes to a TAFKAL80ETC concert", 4, 20)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(3);
    expect(items[0].quality).toBe(23);
  })

  it("Backstage passes sellIn 0 quality is 0", () => {
    const gilded = new Shop([new Backstage("Backstage passes to a TAFKAL80ETC concert", 0, 20)])
    const items = gilded.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  })
});